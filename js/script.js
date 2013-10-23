function onDeviceReady() {
  //use AppMobi viewport to handle device resolution differences if you want
   
  //hide splash screen now that our app is ready to run
  AppMobi.device.hideSplashScreen();
  setTimeout(function(){
    $.ui.launch();
  },50);

  // AppMobi.player.volume(90);

  // AppMobi.player.loadSound("../sounds/01.mp3",5);
  AppMobi.player.loadSound("sounds/01.mp3");
  function loadSoundError()
  {
    alert("فایل صوتی یافت نشد!");
  }
  document.addEventListener("appMobi.player.sound.error",loadSoundError,false);

  AppMobi.player.play();

  alert('Audio Current Track Length: ' + AppMobi.player.audioInfo.duration);

}

document.addEventListener("appMobi.device.ready",onDeviceReady,false);

$.ui.autoLaunch=false;
$.ui.useOSThemes=false;
$.ui.blockPageScroll();
$(document).ready(function(){
  //if($.ui.useOSThemes&&!$.os.ios&&$("#afui").get(0).className!=="ios")
  //$("#afui").removeClass("ios");
});

