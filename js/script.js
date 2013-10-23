var sounds_path = "sounds/";

function onDeviceReady() {
  //use AppMobi viewport to handle device resolution differences if you want
  
  // lock orientation
  AppMobi.device.setRotateOrientation("portrait");
  AppMobi.device.setAutoRotate(false);
  
  // Never go to sleep
  AppMobi.device.managePower(true,false);

  //hide splash screen now that our app is ready to run
  AppMobi.device.hideSplashScreen();
  setTimeout(function(){
    $.ui.launch();
  },50);

  // AppMobi.player.volume(90);

}

document.addEventListener("appMobi.device.ready",onDeviceReady,false);

$.ui.autoLaunch=false;
$.ui.useOSThemes=false;
$.ui.blockPageScroll();
$(document).ready(function(){
  //if($.ui.useOSThemes&&!$.os.ios&&$("#afui").get(0).className!=="ios")
  //$("#afui").removeClass("ios");
  window.scroll(0,0); //!
});

function play_sound(panel){
  var section_id = $(panel).data('section');
  if(isNaN(section_id)) return false;
  AppMobi.player.startAudio(sounds_path+section_id+".mp3",false);
}

function stop_sound (panel) {
  AppMobi.player.stopAudio();


}