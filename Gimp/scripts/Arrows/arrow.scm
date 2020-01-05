; Berengar W. Lehr (Berengar.Lehr@gmx.de)
; Medical Physics Group, Department of Diagnostic and Interventional Radiology
; Jena University Hospital, 07743 Jena, Thueringen, Germany
;
; This program is free software; you can redistribute it and/or modify
; it under the terms of the GNU General Public License as published by
; the Free Software Foundation; either version 2 of the License, or
; (at your option) any later version.
;
; This program is distributed in the hope that it will be useful,
; but WITHOUT ANY WARRANTY; without even the implied warranty of
; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
; GNU General Public License for more details.
;
; If you use this script and/or like it the author would be happy to
; receive a postcard from you: 
;
; You should have received a copy of the GNU General Public License
; along with this program; if not, write to the Free Software
; Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
;
; Versionhistory:
;   11/10/2009 first release
;   11/15/2009 Added fixed brush width and double headed error, removed bug 1) one-point-paths, 2) horizontal paths
;   11/16/2009 Fixed image type restriction string
;   11/19/2009 Added feature for absolute wing length, fixed handling gray-scale images
;   25/01/2010 Fixed fixed opacity bug (thanks to Richard)
;	20/07/2010 Report an error and terminate the script if the path only has one point.
;              Display a warning message if the path has more than two points
;              Display a warning message if there is more than one path
;              Delete the path by default.
;              Temporarily set the brush mode to 'Normal' (arrows are not drawn normally if 'Disolve'
;				mode (for example) is selected).
;	22/07/2013 Allow curved arrows (all changes marked RMcL 22.7.2013)
;   11/9/2014 - setting the radius of the brush when defining the new brush seems to have no effect in GIMP 2.8.14 - it
;       uses the radius of the brush as specified in the toolbox. These mods save the radius of the
;       toolbox brush, sets the new brush to be the default brush and then sets the radius of the toolbox brush.
;       The toolbox brush radius is then restored afterwards (all changes marked RMcL 11.9.2014)
;   16/9/2014 Use gimp-context-push and gimp-context-pop rather than saving the toolbox brush and radius explicitly
;
(define pi (* 4 (atan 1.0)))

(define 
    (script-fu-help-1Arrow
        inPointToX
        inPointToY
        inPointFromX
        inPointFromY
        theWingLength
        WingAngle
        drawable
        image
        FullHead
        MiddlePoint
    )
    (let*
        (
        ; calculate absolute angle of both wings in image from relative angle 
        ; between wings and arrow-tail and absolute angle of arrow-tail
        (theArrowAngle (if (= (- inPointToY inPointFromY) 0)
            (/ pi (if (< (- inPointToX inPointFromX) 0) 2 -2))
            (+ (atan (/ (- inPointToX inPointFromX) (- inPointToY inPointFromY))) (if (> inPointToY inPointFromY) pi 0))
        ))
        (theLeftAngle  (+ theArrowAngle WingAngle))
        (theRightAngle (- theArrowAngle WingAngle))

        ; calculate end points of both wings
        (theLeftWingEndPointX  (+ inPointToX (* theWingLength (sin theLeftAngle))))
        (theLeftWingEndPointY  (+ inPointToY (* theWingLength (cos theLeftAngle))))
        (theRightWingEndPointX (+ inPointToX (* theWingLength (sin theRightAngle))))
        (theRightWingEndPointY (+ inPointToY (* theWingLength (cos theRightAngle))))

        (points          (cons-array 4 'double))
        (theMiddleWingEndPointX 0)    (theMiddleWingEndPointY 0)
		(PreviousOpacity 100.0)
		(PreviousPaintMode 0)			; 20.7.2010
        )
        (begin
		(set! PreviousOpacity (car (gimp-context-get-opacity)))
		(gimp-context-set-opacity 100.0)
		(set! PreviousPaintMode (car (gimp-context-get-paint-mode)))	; 20.7.2010
        (gimp-context-set-paint-mode NORMAL-MODE)						; 20.7.2010
    
        ; collect points for arrow-tail and draw them
; Now draw the arrow tail along the path in the higher level function rather than a straight line here RMcL 22.7.2013       
;RMcL 22.7.2013        (aset points 0 inPointToX)               (aset points 1 inPointToY)
;RMcL 22.7.2013        (aset points 2 inPointFromX)             (aset points 3 inPointFromY)
;RMcL 22.7.2013        (gimp-paintbrush-default drawable 4 points) (set! points (cons-array 4 'double))
        ; accordingly for left wing
        (aset points 0 inPointToX)               (aset points 1 inPointToY)
        (aset points 2 theLeftWingEndPointX)     (aset points 3 theLeftWingEndPointY)
        (gimp-paintbrush-default drawable 4 points) (set! points (cons-array 4 'double))
        ; accordingly for right wing
        (aset points 0 inPointToX)               (aset points 1 inPointToY)
        (aset points 2 theRightWingEndPointX)    (aset points 3 theRightWingEndPointY)
        (gimp-paintbrush-default drawable 4 points)

        ; only if head is to be filled
        (if (= FullHead 1) (begin
            ; calculate intersection of connection between the wings end points and arrow tail
            ; shrink distance between this point and arrow head if MiddlePoint < 100
            (set! theMiddleWingEndPointX (+ inPointToX 
                                            (* (/ MiddlePoint 100) (- (/ (+ theLeftWingEndPointX theRightWingEndPointX) 2) inPointToX))
                                         ))
            (set! theMiddleWingEndPointY (+ inPointToY
                                            (* (/ MiddlePoint 100) (- (/ (+ theLeftWingEndPointY theRightWingEndPointY) 2) inPointToY))
                                         ))

            ; collect points for left wing end - intersection - right wing end & draw it
            (set! points (cons-array 6 'double))
            (aset points 0 theLeftWingEndPointX)      (aset points 1 theLeftWingEndPointY)
            (aset points 2 theMiddleWingEndPointX)    (aset points 3 theMiddleWingEndPointY)
            (aset points 4 theRightWingEndPointX)     (aset points 5 theRightWingEndPointY)
            (gimp-paintbrush-default drawable 6 points)

            ; collect points to create selection which will be filled with FG color
            (set! points (cons-array 8 'double))
            (aset points 0 inPointToX)                (aset points 1 inPointToY)
            (aset points 2 theLeftWingEndPointX)      (aset points 3 theLeftWingEndPointY)
            (aset points 4 theMiddleWingEndPointX)    (aset points 5 theMiddleWingEndPointY)
            (aset points 6 theRightWingEndPointX) (aset points 7 theRightWingEndPointY)
            (gimp-free-select image 8 points CHANNEL-OP-REPLACE TRUE FALSE 0)
            (gimp-edit-bucket-fill drawable FG-BUCKET-FILL NORMAL-MODE 100 0 FALSE 0 0)
            (gimp-selection-none image)
        ))
		(gimp-context-set-paint-mode PreviousPaintMode)		; 20.7.2010
		(gimp-context-set-opacity PreviousOpacity)
        ) ; begin
    ) ; let
) ; define

;-----------------------------------------------------------------------------------------
;
; New function defined RMcL 22.7.2013
;
; Draw an arrow with curved wings
;
; On entry:
;		P0x..P3y = the x,y coordinates of P0, P1, P2 and P3 for the Bézier curve
;		t = the value of t at the back of the arrow
;		half_wing_width = half the width of the back of the arrow (maximum wing width)
;		drawable = the drawable
;		image = the image
;		full_head = 1 if the arrow head is to be filled, 0 otherwise
;		middle_point = the percentage of the arrow length that is to be filled (iff full_head == 1)
;				(75% fills more of the head than 25%)
;		num_points = the number of points to use to construct the wings (3..99) (excludes the tip of the arrow)
;		P0_end = 1 if the arrow is to be drawn at the P0 end of the path, = 0 for the P3 end
;		
(define 
    (Draw_Curved_Wing_Arrow
        P0x P0y P1x P1y P2x P2y P3x P3y
		t
        half_wing_width
        drawable
        image
        full_head
        middle_point
		num_points
		P0_end
		arrow_length
    )
    (let*
        (
        (points1		(cons-array 200 'double))			; points for one wing ...
        (points2		(cons-array 200 'double))			; ... and the other
        (notch_points	(cons-array 6 'double))
		(in_fill_points (cons-array 406 'double))			; used when filling the head of the arrow
		(PreviousOpacity 100.0)
		(PreviousPaintMode 0)
		(count 1)
		(t_adjustment 0.0)
		(t_middle_point 0.0)
		(bezier_results '(0.0 0.0))
		(arrow_width 0.0)
		(x 0.0)												; poisiton on the path
		(y 0.0)												; poisiton on the path
		(x_deriv 0.0)										; derivative wrt t of x
		(y_deriv 0.0)										; derivative wrt t of y
		(hypot 0.0)											; sqrt( x_deriv^2 + y_deriv^2)
		(x_modifier 0.0)
		(y_modifier 0.0)
		(points_index 0)
		(x_diff 0.0)
		(y_diff 0.0)
        )

		(if (= P0_end 1)
			(begin
				(set! t_adjustment (/ t num_points))
				(set! t_middle_point (* t middle_point))
				(set! t_middle_point (/ t_middle_point 100.0))
				(set! t 0.0)								; start at P0
				(aset points1 0 P0x)						; set first point on one side of the arrowhead ...
				(aset points1 1 P0y)
				(aset points2 0 P0x)						; ... and the other
				(aset points2 1 P0y)
			)
			(begin
				(set! t_middle_point (- 1.0 t))
				(set! t_adjustment (/ t_middle_point num_points))
				(set! t_adjustment (- 0.0 t_adjustment))
				(set! t_middle_point (* t_middle_point middle_point))
				(set! t_middle_point (/ t_middle_point 100.0))
				(set! t_middle_point (- 1.0 t_middle_point))
				(set! t 1.0)								; start at P3
				(aset points1 0 P3x)						; set first point on one side of the arrowhead ...
				(aset points1 1 P3y)
				(aset points2 0 P3x)						; ... and the other
				(aset points2 1 P3y)
			)
		)	; end - if 

		; set the middle part of notch points based on t_middle_point in case the head has to be filled

		(aset notch_points 2 (car (Bezier_Coords P0x P1x P2x P3x t_middle_point)))
		(aset notch_points 3 (car (Bezier_Coords P0y P1y P2y P3y t_middle_point)))


 		(set! PreviousOpacity (car (gimp-context-get-opacity)))
		(gimp-context-set-opacity 100.0)
		(set! PreviousPaintMode (car (gimp-context-get-paint-mode)))
        (gimp-context-set-paint-mode NORMAL-MODE)
    
		(set! count 1)
		(set! points_index 2)
		(while (<= count num_points)
			(set! t (+ t t_adjustment))
			(set! bezier_results (Bezier_Coords P0x P1x P2x P3x t))
			(set! x (car bezier_results))
			(set! x_deriv (cadr bezier_results))
			(set! bezier_results (Bezier_Coords P0y P1y P2y P3y t))
			(set! y (car bezier_results))
			(set! y_deriv (cadr bezier_results))

											; calculate the width of the arrow based on the direct distance of
											; x and y from the tip of the arrow (calculating the width with equal
											; steps for each step in t gives a rounded tip to the arrow)
			(set! x_diff (- (aref points1 0) x))
			(set! y_diff (- (aref points1 1) y))
			(set! hypot (sqrt (+ (* x_diff x_diff) (* y_diff y_diff))))
			(set! arrow_width (/ (* hypot half_wing_width) arrow_length))

			(set! hypot (sqrt (+ (* x_deriv x_deriv) (* y_deriv y_deriv))))

			(if (> hypot 0.0)
				(begin
					(set! x_modifier (/ (* y_deriv arrow_width) hypot))
					(set! y_modifier (/ (* x_deriv arrow_width) hypot))
					(aset points1 points_index (+ x x_modifier))
					(aset points2 points_index (- x x_modifier))
					(set! points_index (+ points_index 1))
					(aset points1 points_index (- y y_modifier))
					(aset points2 points_index (+ y y_modifier))
					(set! points_index (+ points_index 1))
				)
				(begin								; avoid division by 0
					(aset points1 points_index x)
					(aset points2 points_index x)
					(set! points_index (+ points_index 1))
					(aset points1 points_index y)
					(aset points2 points_index y)
					(set! points_index (+ points_index 1))
				)
			)	; end - if
 			(set! count (+ count 1))
		)	; end - while

        ; draw the one wing
        (gimp-paintbrush-default drawable points_index points1)


        ; draw the other wing
        (gimp-paintbrush-default drawable points_index points2)

        ; only if head is to be filled
		(if (= full_head 1)
			(begin
				(set! points_index (- points_index 1))
				(aset notch_points 1 (aref points1 points_index))	; y coord
				(aset notch_points 5 (aref points2 points_index))	; y coord
				(set! points_index (- points_index 1))
				(aset notch_points 0 (aref points1 points_index))	; x coord
				(aset notch_points 4 (aref points2 points_index))	; x coord
				(gimp-paintbrush-default drawable 6 notch_points)

				(set! points_index 0)
				(set! x 0)
				(set! num_points (* num_points 2))
				(while (< points_index num_points)
					(aset in_fill_points x (aref points1 points_index))
					(set! x (+ x 1))
					(set! points_index (+ points_index 1))
				)	; end - while

				(set! y 0)
				(while (< y 6)
					(aset in_fill_points x (aref notch_points y))
					(set! y (+ y 1))
					(set! x (+ x 1))
				)	; end - while

				(while (> points_index 0)
					(set! points_index (- points_index 1))
					(set! y (aref points2 points_index))
					(set! points_index (- points_index 1))
					(aset in_fill_points x (aref points2 points_index))
					(set! x (+ x 1))
					(aset in_fill_points x y)
					(set! x (+ x 1))
				)	; end - while

				(set! num_points (* num_points 2))
				(set! num_points (+ num_points 6))
				(gimp-free-select image num_points in_fill_points CHANNEL-OP-REPLACE TRUE FALSE 0)
				(gimp-edit-bucket-fill drawable FG-BUCKET-FILL NORMAL-MODE 100 0 FALSE 0 0)
				(gimp-selection-none image)
			)	; end -begin
		)	; end - if
		(gimp-context-set-paint-mode PreviousPaintMode)
		(gimp-context-set-opacity PreviousOpacity)
    ) ; let
) ; end - define Draw_Curved_Wing_Arrow()

; end of new function RMcL 22.7.2013

;---------------------------------------------------------------------------------
;
; New function defined RMcL 22.7.2013
;
; Return the x or y coordinate for a given value of t (0..1).
; Also return the first derivative for x or y at that point
;
; The equation for the Bézier curve is:
;
;	B(t) = (1 - t)^3*P0 + 3(1 - t)^2*t*P1 + 3(1-t)*t^2*P2 + t^3*P3
;
; This can be rewritten as:
;
;   t^3(P3 - 3P2 + 3P1 - P0) +
;   t^2(3P2 - 6P1 + 3P0) +
;	t(3P1 - 3P0) +
;	P0
;
; the first derivative is then:
;
;   3t^2(P3 - 3P2 + 3P1 - P0) +
;   2t(3P2 - 6P1 + 3P0) +
;	(3P1 - 3P0) +
;
; The x or y coordinate of the point is returned as the first item of a list and the
; first derivative of the point as the second item.
;

(define (Bezier_Coords P0 P1 P2 P3 t)
	(let* (
		(result 0.0)
		(derivative 0.0)						; first derivative
		(term1 0.0)								; P3 - 3P2 + 3P1 - P0
		(term2 0.0)								; P2 - 2P1 + P0
		(term3 0.0)								; P1 - P0
		(t_cubed 0.0)							; t^3
		(t_squared 0.0)							; t^2
		)
	(set! t_squared (* t t))
	(set! t_cubed (* t_squared t))
	(set! term1 (- P1 P2))
	(set! term1 (* term1 3))
	(set! term1 (+ term1 P3))
	(set! term1 (- term1 P0))

	(set! term2 (* P2 3))
	(set! term2 (- term2 (* P1 6)))
	(set! term2 (+ term2 (* P0 3)))

	(set! term3 (- P1 P0))
	(set! term3 (* term3 3))

	(set! result (* t_cubed term1))
	(set! result (+ result (* t_squared term2)))
	(set! result (+ result (* t term3)))
	(set! result (+ result P0))

	(set! derivative (* t_squared (* term1 3)))
	(set! derivative (+ derivative (* t (* term2 2))))
	(set! derivative (+ derivative term3))
	
	(list 
		result
		derivative
	)
	)	; end - let
)	; define Bezier_Coords
; end of new function RMcL 22.7.2013
;
;---------------------------------------------------------------------------------

(define
    (script-fu-draw-arrow
        image
		drawable
        WingLengthRatio
        WingAngle
        FullHead
        MiddlePoint
        BrushThicknessOrRatio
        useFirstPointArrowAsHead
        usePathThenRemove
        useNewLayer
        useDoubleHeadArrow
		CurvedArrowhead				; RMcL 22.7.2013
		CurvedArrowheadPoints		; RMcL 22.7.2013
        useless
    )
    (let*
        (
        (theActiveVector (car   (gimp-image-get-active-vectors image)))
        (theNumVectors (car   (gimp-image-get-vectors image)))	; 20.7.2010
        (theFirstStroke  0)          (theStrokePoints 0)
        (theNumPoints    0)
        (inPoint_1X      0)          (inPoint_1Y      0)
        (inPoint_2X      0)          (inPoint_2Y      0)
		(Bezier_x		 0.0)			; RMcL 22.7.2013
		(Bezier_y		 0.0)			; RMcL 22.7.2013
		(arrow_depth 0.0)				; RMcL 22.7.2013
		(t 0.0)							; RMcL 22.7.2013
		(new_length 0.0)				; RMcL 22.7.2013
		(i 0.0)							; RMcL 22.7.2013
		(adjustment 0.0)				; RMcL 22.7.2013
		(x_diff 0.0)					; RMcL 22.7.2013
		(y_diff 0.0)					; RMcL 22.7.2013
		(half_arrowhead_width 0.0)		; RMcL 22.7.2013

        (theArrowLength 0)            (theWingLength 0)
        (oldLayer (car (gimp-image-get-active-layer image)))

        (brushName    "arrowBrush")
; RMcL 16.9.2014        (oldBrushName (car (gimp-context-get-brush)))
; RMcL 16.9.2014        (oldBrushSize (car(gimp-context-get-brush-size)))              ; mod RMcL 11.9.2014
        )

        (if (not (= theActiveVector -1)) (begin
            (gimp-image-undo-group-start image)

            (gimp-context-push)       ; RMcL 16.9.2014

            ; create new layer if asked to do so
            (if (= useNewLayer 1) (begin
                (set! drawable (car (gimp-layer-new image (car (gimp-image-width     image))
                                                          (car (gimp-image-height    image))
                                                          (+ 1 (* 2 (car (gimp-image-base-type image))))
                                                          "Arrow" 100 NORMAL-MODE )))
                (gimp-image-add-layer image drawable 0)
                ; set new layer completely transparent
                (gimp-layer-add-mask drawable (car (gimp-layer-create-mask drawable ADD-BLACK-MASK)))
                (gimp-layer-remove-mask drawable MASK-APPLY)
            ))

			; 20.7.2010 - start of additional section
			(if (> theNumVectors 1)
				(gimp-message "There is more than one path defined -\nthe active path defines the arrow")
			)	; end - if
			; 20.7.2010 - end of additional section

            ; get path/vector points
            (set! theFirstStroke  (aref  (cadr (gimp-vectors-get-strokes theActiveVector)) 0))
            (set! theStrokePoints (caddr (gimp-vectors-stroke-get-points theActiveVector theFirstStroke)))
            (set! theNumPoints    (cadr  (gimp-vectors-stroke-get-points theActiveVector theFirstStroke)))

			; 20.7.2010 - start of additional section
			(if (< theNumPoints 12)
				(begin
					(gimp-image-undo-group-end image)
					(error '(This script needs a path with two points) (/ theNumPoints 6))
				)	; end - begin
			)	; end - if

			(if (> theNumPoints 12)
				(gimp-message "This script needs a path with two points\nto position the arrow head and tail.\n\nThe path has more than two points\nThe first and last points are used")
			)	; end - if
			; 20.7.2010 - end of additional section

            ; get position of arrow head and arrow tail from active vector
            (set! inPoint_1X    (aref theStrokePoints 2))
            (set! inPoint_1Y    (aref theStrokePoints 3))
            (set! inPoint_2X    (aref theStrokePoints (- theNumPoints 4)))
            (set! inPoint_2Y    (aref theStrokePoints (- theNumPoints 3)))
   
            ; calculate length of arrows depending on the length of the whole arrow
;RMcL 22.7.2013             (define (sqr x) (* x x))
;RMcL 22.7.2013            (set! theArrowLength (exp (* 0.5 (log (+ (sqr (- inPoint_1X inPoint_2X)) (sqr (- inPoint_1Y inPoint_2Y)))))))
			(set! theArrowLength	(car (gimp-vectors-stroke-get-length theActiveVector 1 3.0)))	;RMcL 22.7.2013
            (if (< WingLengthRatio 0)
            	(set! theWingLength (* theArrowLength (/ -1 WingLengthRatio)))
            	(set! theWingLength WingLengthRatio)
            )

            ; define new brush for drawing operation
            (gimp-brush-new brushName)
            (gimp-brush-set-shape brushName BRUSH-GENERATED-CIRCLE)
            (gimp-brush-set-spikes brushName 2)
            (gimp-brush-set-hardness brushName 1.00)
            (gimp-brush-set-aspect-ratio brushName 1.0)
            (gimp-brush-set-angle brushName 0.0)
            (gimp-brush-set-spacing brushName 1.0)

; Modication RMcL 11.9.2014 - setting the radius of the brush at this time seems to have no effect in GIMP 2.8.14 - it
;       uses the radius of the brush as specified in the toolbox. As a work-around the mod saves the radius of the
;       toolbox brush, sets the new brush to be the default brush and then sets the radius of the toolbox brush. The
;       toolbox brush radius is then restored afterwards
;
;            ; set radius of brush according to length of arrow
;            (if (< BrushThicknessOrRatio 0)
;                (gimp-brush-set-radius brushName (/ theArrowLength (* BrushThicknessOrRatio -1)))
;                (gimp-brush-set-radius brushName BrushThicknessOrRatio)
;            )
;
;            (gimp-context-set-brush brushName)

            (gimp-context-set-brush brushName)

            ; set radius of brush according to length of arrow or to a set value
            (if (< BrushThicknessOrRatio 0)
                (gimp-context-set-brush-size (/ theArrowLength (* BrushThicknessOrRatio -1)))
                (gimp-context-set-brush-size BrushThicknessOrRatio)
            )
; end of mod RMcL 11.9.2014

;new section of code RMcL 22.7.2013
			(set! arrow_depth (* theWingLength (cos (* (/ WingAngle 180) pi))))	; the depth of the arrowhead

			(set! half_arrowhead_width (sqrt (- (* theWingLength theWingLength) (* arrow_depth arrow_depth))))

			; now find the line that is the arrowhead depth with one end at the first end of the path and the other
			; on the path

			(set! i 0.0)
			(set! t 0.5)
			(set! adjustment 0.25)
			(while (< i 16.0)
				(set! Bezier_x (car (Bezier_Coords (aref theStrokePoints 2)
										  (aref theStrokePoints 4)
										  (aref theStrokePoints 6)
										  (aref theStrokePoints 8)
										  t)))

				(set! Bezier_y (car (Bezier_Coords (aref theStrokePoints 3)
										  (aref theStrokePoints 5)
										  (aref theStrokePoints 7)
										  (aref theStrokePoints 9)
										  t)))
				(set! x_diff (- (aref theStrokePoints 2) Bezier_x))
				(set! y_diff (- (aref theStrokePoints 3) Bezier_y))
				(set! new_length (sqrt (+ (* x_diff x_diff) (* y_diff y_diff))))
				(if (< new_length arrow_depth)
					(set! t (+ t adjustment))
					(set! t (- t adjustment))
				)
				(set! adjustment (/ adjustment 2))
				(set! i (+ i 1.0))
			)	; end - while
;end of new section of code RMcL 22.7.2013

 
			(if (or (= useFirstPointArrowAsHead 1) (= useDoubleHeadArrow 1))
				(if (= CurvedArrowhead 1)												; RMcL 22.7.2013
					(begin
						(Draw_Curved_Wing_Arrow (aref theStrokePoints 2)
												(aref theStrokePoints 3)
												(aref theStrokePoints 4)
												(aref theStrokePoints 5)
												(aref theStrokePoints 6)
												(aref theStrokePoints 7)
												(aref theStrokePoints 8)
												(aref theStrokePoints 9)
												t
												half_arrowhead_width
												drawable image
												FullHead
												MiddlePoint
												CurvedArrowheadPoints
												1
												arrow_depth)
					)	; end - begin
					(begin
                		(script-fu-help-1Arrow inPoint_1X inPoint_1Y Bezier_x Bezier_y theWingLength (* (/ WingAngle 180) pi) drawable image FullHead MiddlePoint) ;RMcL 22.7.2013
					)	; end - begin
				) ; end - if
			) ; end - if

;new section of code RMcL 22.7.2013
			; now find the line that is the arrowhead depth with one end at the second end of the path and the other
			; on the path

			(set! i 0.0)
			(set! t 0.5)
			(set! adjustment 0.25)
			(while (< i 16.0)
				(set! Bezier_x (car (Bezier_Coords (aref theStrokePoints 2)
										  (aref theStrokePoints 4)
										  (aref theStrokePoints 6)
										  (aref theStrokePoints 8)
										  t)))

				(set! Bezier_y (car (Bezier_Coords (aref theStrokePoints 3)
										  (aref theStrokePoints 5)
										  (aref theStrokePoints 7)
										  (aref theStrokePoints 9)
										  t)))
				(set! x_diff (- (aref theStrokePoints 8) Bezier_x))
				(set! y_diff (- (aref theStrokePoints 9) Bezier_y))
				(set! new_length (sqrt (+ (* x_diff x_diff) (* y_diff y_diff))))
				(if (< new_length arrow_depth)
					(set! t (- t adjustment))
					(set! t (+ t adjustment))
				)
				(set! adjustment (/ adjustment 2))
				(set! i (+ i 1.0))
			)	; end - while
;end of new section of code RMcL 22.7.2013


;RMcL 22.7.2013            (if (or (= useFirstPointArrowAsHead 0) (= useDoubleHeadArrow 1))
;RMcL 22.7.2013                (script-fu-help-1Arrow inPoint_2X inPoint_2Y inPoint_1X inPoint_1Y theWingLength (* (/ WingAngle 180) pi) drawable image FullHead MiddlePoint))
            (if (or (= useFirstPointArrowAsHead 0) (= useDoubleHeadArrow 1))
				(if (= CurvedArrowhead 1)												; RMcL 22.7.2013
					(begin
						(Draw_Curved_Wing_Arrow (aref theStrokePoints 2)
												(aref theStrokePoints 3)
												(aref theStrokePoints 4)
												(aref theStrokePoints 5)
												(aref theStrokePoints 6)
												(aref theStrokePoints 7)
												(aref theStrokePoints 8)
												(aref theStrokePoints 9)
												t
												half_arrowhead_width
												drawable image
												FullHead
												MiddlePoint
												CurvedArrowheadPoints
												0
												arrow_depth)
					)	; end - begin
					(begin
                		(script-fu-help-1Arrow inPoint_2X inPoint_2Y Bezier_x Bezier_y theWingLength (* (/ WingAngle 180) pi) drawable image FullHead MiddlePoint);RMcL 22.7.2013
					) ; end - begin
				) ; end - if
			) ; end - if

			(gimp-edit-stroke-vectors drawable theActiveVector)		; draw the shaft of the arrow along the path RMcL 22.7.2013

; RMcL 16.9.2014			(gimp-context-set-brush oldBrushName)
            (gimp-brush-delete brushName)

; RMcL 16.9.2014            (gimp-context-set-brush-size oldBrushSize)              ; mod RMcL 11.9.2014
            (gimp-context-pop)        ; RMcL 16.9.2014

            (if (= usePathThenRemove 1) (gimp-image-remove-vectors image theActiveVector))

            (if (= useNewLayer 1) (begin
                (plug-in-autocrop-layer TRUE image drawable)
                (gimp-image-set-active-layer image oldLayer)
            ))
            (gimp-displays-flush)
            (gimp-image-undo-group-end image)
        )	; end - begin
		(gimp-message "This script needs a path with two points\nto position the arrow head and tail (first and last point of path is used)")
	  )	; end - if
    ) ; let*
); define

; Register the function with GIMP:

(script-fu-register "script-fu-draw-arrow"
  _"<Image>/Tools/Arrow..."
  _"Draw a nearly arbitrary arrow in your image"
  "Berengar W. Lehr <B-Ranger@web.de>"
  "2009, Berengar W. Lehr / MPG@IDIR, UH Jena, Germany."
  "19th November 2009"
  "*"
  SF-IMAGE       "The image"   0
  SF-DRAWABLE    "The drawable"   0
  SF-ADJUSTMENT  "Length of wings (LoW = AL/X) *" '(-2.5 -100 500 10 1 1 1)
  SF-ADJUSTMENT  "Angle between arrow and wing in degrees" '(25 5 85 5 15 0 0)
  SF-TOGGLE      "Fill head of arrow?" TRUE
  SF-ADJUSTMENT  "Percentage size of notch of arrow head\n(only valid if head of arrow is filled)" '(75 0 100 1 10 0 1)
  SF-ADJUSTMENT  "Brush Thickness* (BS = AL/X)" '(-25 -500 500 1 10 0 1)
  SF-TOGGLE      "Use first path point as arrow head?\n(if not the last path point of is used as arrow head)" TRUE
  SF-TOGGLE      "Delete path after arrow was drawn?" TRUE
  SF-TOGGLE      "Use new layer for arrow?" TRUE
  SF-TOGGLE      "Draw double headed arrow?" FALSE
  SF-TOGGLE      "Curved arrow wings?" FALSE
  SF-ADJUSTMENT  "Points for curved arrow wing (2 to 99)" '(20 2 99 1 10 0 1)
  SF-TOGGLE		 "*) Positive values stand for absolute pixel size,\nnegative for values relative to arrow length\n(the value of this checkbox is ignored)" FALSE
)
