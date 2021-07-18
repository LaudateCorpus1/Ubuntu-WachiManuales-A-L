                           ^
[ 51%] Building CXX object src/CMakeFiles/inkscape_base.dir/object/sp-switch.cpp.o
[ 51%] Building CXX object src/CMakeFiles/inkscape_base.dir/object/sp-symbol.cpp.o
[ 51%] Building CXX object src/CMakeFiles/inkscape_base.dir/object/sp-tag-use-reference.cpp.o
[ 51%] Building CXX object src/CMakeFiles/inkscape_base.dir/object/sp-tag-use.cpp.o
In file included from /home/wachin/gitlab/Inkscape-Releases/inkscape/src/style.h:22,
                 from /home/wachin/gitlab/Inkscape-Releases/inkscape/src/object/sp-tag-use.cpp:28:
/home/wachin/gitlab/Inkscape-Releases/inkscape/src/style-internal.h:199:28: warning: ‘SPIBase::style_src’ is too small to hold all values of ‘enum class SPStyleSrc’
     SPStyleSrc style_src : 2; // Source (attribute, style attribute, style-sheet).
                            ^
[ 51%] Building CXX object src/CMakeFiles/inkscape_base.dir/object/sp-tag.cpp.o
[ 51%] Building CXX object src/CMakeFiles/inkscape_base.dir/object/sp-text.cpp.o
In file included from /home/wachin/gitlab/Inkscape-Releases/inkscape/src/style.h:22,
                 from /home/wachin/gitlab/Inkscape-Releases/inkscape/src/libnrtype/FontFactory.h:28,
                 from /home/wachin/gitlab/Inkscape-Releases/inkscape/src/object/sp-text.cpp:28:
/home/wachin/gitlab/Inkscape-Releases/inkscape/src/style-internal.h:199:28: warning: ‘SPIBase::style_src’ is too small to hold all values of ‘enum class SPStyleSrc’
     SPStyleSrc style_src : 2; // Source (attribute, style attribute, style-sheet).
                            ^
[ 51%] Building CXX object src/CMakeFiles/inkscape_base.dir/object/sp-title.cpp.o
[ 51%] Building CXX object src/CMakeFiles/inkscape_base.dir/object/sp-tref-reference.cpp.o
[ 51%] Building CXX object src/CMakeFiles/inkscape_base.dir/object/sp-tref.cpp.o
In file included from /home/wachin/gitlab/Inkscape-Releases/inkscape/src/style.h:22,
                 from /home/wachin/gitlab/Inkscape-Releases/inkscape/src/object/sp-tref.cpp:29:
/home/wachin/gitlab/Inkscape-Releases/inkscape/src/style-internal.h:199:28: warning: ‘SPIBase::style_src’ is too small to hold all values of ‘enum class SPStyleSrc’
     SPStyleSrc style_src : 2; // Source (attribute, style attribute, style-sheet).
                            ^
[ 51%] Building CXX object src/CMakeFiles/inkscape_base.dir/object/sp-tspan.cpp.o
In file included from /home/wachin/gitlab/Inkscape-Releases/inkscape/src/style.h:22,
                 from /home/wachin/gitlab/Inkscape-Releases/inkscape/src/object/sp-tspan.cpp:40:
/home/wachin/gitlab/Inkscape-Releases/inkscape/src/style-internal.h:199:28: warning: ‘SPIBase::style_src’ is too small to hold all values of ‘enum class SPStyleSrc’
     SPStyleSrc style_src : 2; // Source (attribute, style attribute, style-sheet).
                            ^
[ 51%] Building CXX object src/CMakeFiles/inkscape_base.dir/object/sp-use-reference.cpp.o
[ 51%] Building CXX object src/CMakeFiles/inkscape_base.dir/object/sp-use.cpp.o
In file included from /home/wachin/gitlab/Inkscape-Releases/inkscape/src/style.h:22,
                 from /home/wachin/gitlab/Inkscape-Releases/inkscape/src/object/sp-use.cpp:37:
/home/wachin/gitlab/Inkscape-Releases/inkscape/src/style-internal.h:199:28: warning: ‘SPIBase::style_src’ is too small to hold all values of ‘enum class SPStyleSrc’
     SPStyleSrc style_src : 2; // Source (attribute, style attribute, style-sheet).
                            ^
In file included from /usr/include/c++/8/memory:80,
                 from /home/wachin/gitlab/Inkscape-Releases/inkscape/src/document.h:25,
                 from /home/wachin/gitlab/Inkscape-Releases/inkscape/src/object/sp-use.cpp:27:
/usr/include/c++/8/bits/unique_ptr.h: In instantiation of ‘void std::default_delete<_Tp>::operator()(_Tp*) const [with _Tp = SPCurve]’:
/usr/include/c++/8/bits/unique_ptr.h:274:17:   required from ‘std::unique_ptr<_Tp, _Dp>::~unique_ptr() [with _Tp = SPCurve; _Dp = std::default_delete<SPCurve>]’
/home/wachin/gitlab/Inkscape-Releases/inkscape/src/object/sp-use-reference.h:45:50:   required from here
/usr/include/c++/8/bits/unique_ptr.h:79:16: error: invalid application of ‘sizeof’ to incomplete type ‘SPCurve’
  static_assert(sizeof(_Tp)>0,
                ^~~~~~~~~~~
make[2]: *** [src/CMakeFiles/inkscape_base.dir/build.make:4685: src/CMakeFiles/inkscape_base.dir/object/sp-use.cpp.o] Error 1
make[1]: *** [CMakeFiles/Makefile2:1295: src/CMakeFiles/inkscape_base.dir/all] Error 2
make: *** [Makefile:163: all] Error 2
wachin@mx-linux:~/gitlab/Inkscape-Releases/inkscape/build
$ 
