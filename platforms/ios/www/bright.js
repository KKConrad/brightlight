document.addEventListener('polymer-ready', function() {
  var navicon = document.getElementById('navicon');
  var drawerPanel = document.getElementById('drawerPanel');
  navicon.addEventListener('click', function() {
    drawerPanel.togglePanel();
  });
});

function bkgd(color){
	var color;
	document.getElementById('canvas').style.background = color;
    document.getElementById('mainheader').style.color = color;
};

function addClass(element, classToAdd) {
  var currentClassValue = element.className;

  if (currentClassValue.indexOf(classToAdd) == -1) {
    if ((currentClassValue == null) || (currentClassValue === "")) {
      element.className = classToAdd;
    } else {
      element.className += " " + classToAdd;
    }
  }
}

window.plugins.flashlight.switchOn();

setTimeout(function() {
  window.plugins.flashlight.switchOff();
});

document.addEventListener("backbutton", function() {
  // pass exitApp as callbacks to the switchOff method
  window.plugins.flashlight.switchOff(exitApp, exitApp);
}, false);

function exitApp() {
  navigator.app.exitApp();
}

window.plugins.flashlight.available(function(isAvailable) {
  if (isAvailable) {

    // switch on
    window.plugins.flashlight.switchOn(); // success/error callbacks may be passed

    // switch off after 3 seconds
    setTimeout(function() {
      window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
    }, 3000);

  } else {
    alert("Flashlight not available on this device");
  }
});
//
//function removeClass(element, classToRemove) {
//  var currentClassValue = element.className;
//
//  // removing a class value when there is more than one class value present
//  // and the class you want to remove is not the first one
//  if (currentClassValue.indexOf(" " + classToRemove) != -1) {
//    element.className = element.className.replace(" " + classToRemove, "");
//    return;
//  }
//
//  // removing the first class value when there is more than one class
//  // value present
//  if (currentClassValue.indexOf(classToRemove + " ") != -1) {
//    element.className = element.className.replace(classToRemove + " ", "");
//    return;
//  }
//
//  // removing the first class value when there is only one class value
//  // present
//  if (currentClassValue.indexOf(classToRemove) != -1) {
//    element.className = element.className.replace(classToRemove, "");
//    return;
//  }
//}