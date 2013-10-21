function onDeviceReady() {
  //use AppMobi viewport to handle device resolution differences if you want
   
  //hide splash screen now that our app is ready to run
  AppMobi.device.hideSplashScreen();
  setTimeout(function(){
    $.ui.launch();
  },50);
}

document.addEventListener("appMobi.device.ready",onDeviceReady,false);

$.ui.autoLaunch=false;
$.ui.useOSThemes=false;
$.ui.blockPageScroll();
$(document).ready(function(){
  //if($.ui.useOSThemes&&!$.os.ios&&$("#afui").get(0).className!=="ios")
  //$("#afui").removeClass("ios");
});
