
      Kn0ck0ut v0.8

      --++/* by St3pan0va */++--


      Kn0ck0ut is a free VST plugin that takes two mono inputs and

      spectrally subtracts one from the other. It can also retrieve

      centre-panned material from stereo input.


      ----

      Instructions/info:

      This plug-in was made to help extract vocals from music in digital

      audio. it's not so good at this ;) but maybe you can find

      some use for it.



      Installation (windows only):

      download unzip and put the file Kn0ck0ut.DLL in your VST

      plugins directory. restart yr host app.



      If 'extract centre' is On:

      the plugin assumes a stereo input and returns the centre-panned part

      of the stereo image on the left channel.


      Iif 'extract centre' is off:

      the plugin assumes two mono inputs in the form of a stereo signal - one

      hard-panned left and one hard-panned right. Frequencies present in the

      right channel signal are subtracted from the left signal in proportion

      to their amplitude + the result is returned on the L channel.


      Example:

      if you have a vocal version and instrumental version of the same

      track, pass them thru Kn0ck0ut synced up best you can, the

      with-vocal version hard-panned left and the instrumental

      hard-panned right. the frequency spectrum of the instrumental will be

      knocked out of the left-channel, possibly leaving just the vocals. most

      likely leaving a lot else as well. try adjusting the levels (input gain)

      and use the low cut to kill any stray bass. try turning up the blur

      control a little. still no good? what did you expect? magic?


      This isn't a 'phase-cancel' process, so you don't need

      perfectly-matched audio to get a result - eg you can try using

      vocal & instrumental sections of the same track as inputs -

      but what comes out depends on how well-matched the inputs are.

      you won't get a perfect result unless you've got a sample-for-sample

      identical instrumental exactly in sync.


      ----

      Controls:

      Extract centre: ...centre extraction on or off... click to change.

      FFT: 4096x4 is lower quality, less CPU. Use 8192x8 if you can... click to change.

      Blur: adds spectral blur to R channel input. 0 is off.

      R Input Gain: a simple gain control for the right input channel.

      Low Cut: hard cut of low frequencies below this threshold.

      High Cut: hard cut of hi frequencies above this threshold.

      Output gain: a simple gain control - no waveshaping, will clip if

      signal peaks, use yr ears and watch the meters.



      ----

      FAQ:

      What's the best setting for the controls?

      - It depends on what you're trying to do. Experiment and use yr ears.

      Can Kn0ck0ut extract bass/drums/guitar/kazoo ?

      - Kn0ck0ut just returns the difference between the two tracks you feed it.

      - Whatever's on the L channel + not the R remains.

      What does 'extract centre' do?

      - If this is 'on', kn0ck0ut first subtracts the R input amplitudes from

      - the L (SOP to remove common ie centre-panned material) then spectrally

      - subtracts this result from the initial L input, leaving the centre of the

      - stereo image on the L output.

      What does 'blur' do?

      It 'blurs' the frequency spectrum of the R channel input so that a signal in one

      - frequency band spreads to nearby bands. This can be useful to help cancel

      - instrument sounds, but too much will degrade the quality of the result.

      Can I see the source code?

      - It will be back on the website soon: www.freewebs.com/st3pan0va

      Is there a MAC version?

      - No. But plz get the source and make one ;)



      ----

      version history 16/3/05 

      v0.8 Switchable FFT size added. Uses less memory.

           Some slight GUI changes.

      v0.7 Simple GUI implemented. Decay control removed. (unreleased)

      v0.6 Variable samplerate support added. Slightly (10%) faster audio code.

           also now, pointlessly, works as a send effect. (unreleased)

      v0.5.1 now Wavelab compatible (WL4 demo at least)

      v0.5 extract centre function added 12/15/04

      v0.4 Blur control added 14/9/04

      v0.3 Low-amplitude cut removed. R input gain added.

      Decay control added. Quick trig implemented.

      FFT window size set @ 8192. Phase sum bug fixed.

      v0.2 FFT window size increased for higher quality, overlap

      control removed & rate fixed at 8x.

      v0.1 first public version



      ----

      Known issues:

      Kn0ck0ut is very CPU-intensive - around 300Mhz @ 4096x4 FFT, 550Mhz @ 8192x8.

      [to do] Plug-in parameter labels may not initially respond to changes in host 

      samplerate.



      ----

      Acknowledgements / Licence

      Kn0ck0ut v0.8 is free software. No warranty, no

      support. The plugin may be redistributed but only for free,

      and only with this readme file.

      Made using the VST SDK and adapts (with thanks) code from S.M.Sprenger

      available under the Wide Open Licence at www.dspdimension.com

      Uses the QuickTrig class by Robin Davies at www.musicdsp.com

      Thanks to TimG, FondueMeltdown, brainy & the citizens of GYBO & KVR.


      ----

      This plugin has been tested a little with

      Sound Forge 4.5/Spin Software VST-DX wrapper v1.0,

      Fruity Loops 3.1.1, WaveLab 4 demo and CubaseVST 5.1 under Win 2K.

      Use at yr own risk, without warranty or support of any kind.

      send comments or report issues to st3pan0va [at] netscape [dot] net.


      -----
      
      as the original host link is no more, this Zip file was reposted to the internet by niallspence.com



