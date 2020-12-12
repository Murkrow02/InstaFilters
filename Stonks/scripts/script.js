const Diagnostics = require('Diagnostics');
const Materials = require('Materials');
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');
var ReactiveModule = require('Reactive');
const plane = Scene.root.findFirst('Device');
const StonksTxt = Scene.root.findFirst('stonksTxt');
const NotStonksTxt = Scene.root.findFirst('notStonksTxt');
const materialNot = Materials.get('backgroundNotStonks');
const materialStonks = Materials.get('backgroundStonks');
const bg = Scene.root.findFirst('background');
var status = "stonks";
const NotStonksMask = Scene.root.findFirst('faceMeshNotStonks');
const StonksMask = Scene.root.findFirst('faceMeshStonks');

     StonksMask.hidden = false;
     NotStonksMask.hidden = true;
     StonksTxt.hidden = false;
     NotStonksTxt.hidden = true;

//Change background texture
TouchGestures.onTap(plane).subscribe(function (gesture) {
  // Diagnostics.log('Console message logged from the script.');

if(status === "stonks"){
    status = "notStonks";
    bg.material = materialNot;
    StonksMask.hidden = true;
    NotStonksMask.hidden = false;
    StonksTxt.hidden = true;
    NotStonksTxt.hidden = false;
    

}else{
    status = "stonks";
    bg.material = materialStonks;
    NotStonksMask.hidden = true;
    StonksMask.hidden = false;
    StonksTxt.hidden = false;
    NotStonksTxt.hidden = true;
}
  });




// How to log messages to the console (uncomment line below to activate)
//  Diagnostics.log('Console message logged from the script.');
