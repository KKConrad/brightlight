document.addEventListener('polymer-ready', function() {
  var navicon = document.getElementById('navicon');
  var drawerPanel = document.getElementById('drawerPanel');
  navicon.addEventListener('click', function() {
    drawerPanel.togglePanel();
  });
});

document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);

function turnOnFlashlight() {
    window.plugins.flashlight.switchOn();
    addClass(document.getElementById('canvas'), 'turnon');
    removeClass(document.getElementById('canvas'), 'turnoff');
}

function turnOffFlashlight() {
    window.plugins.flashlight.switchOff();
    addClass(document.getElementById('canvas'), 'turnoff');
    removeClass(document.getElementById('canvas'), 'turnon');
}
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

function removeClass(element, classToRemove) {
  var currentClassValue = element.className;

  if (currentClassValue == classToRemove) {
    element.className = "";
    return;
  }

  var classValues = currentClassValue.split(" ");
  var filteredList = [];

  for (var i = 0 ; i < classValues.length; i++) {
    if (classToRemove != classValues[i]) {
      filteredList.push(classValues[i]);
    }
  }

  element.className = filteredList.join(" ");
}


/*

window.plugins.flashlight.switchOn();

setTimeout(function() {
  window.plugins.flashlight.switchOff();
});
*/

document.addEventListener("backbutton", function() {
  // pass exitApp as callbacks to the switchOff method
  window.plugins.flashlight.switchOff(exitApp, exitApp);
}, false);

function exitApp() {
  navigator.app.exitApp();
}
/*
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
*/
