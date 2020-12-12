const Diagnostics = require('Diagnostics');
const Materials = require('Materials');
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');
var ReactiveModule = require('Reactive');
const plane = Scene.root.findFirst('Device');
var status = "stonks";
 
  


     (async function() {
      const [bg, materialStonks, materialNot, StonksMask, NotStonksMask, StonksTxt, NotStonksTxt] = await Promise.all([
        Scene.root.findFirst('background'),
        Materials.findFirst('backgroundStonks'),
        Materials.findFirst('backgroundNotStonks'),
        Scene.root.findFirst('faceMeshStonks'),
        Scene.root.findFirst('faceMeshNotStonks'),
        Scene.root.findFirst('stonksTxt'),
       Scene.root.findFirst('notStonksTxt') 
      ]);

      StonksMask.hidden = false;
      NotStonksMask.hidden = true;
      StonksTxt.hidden = false;
      NotStonksTxt.hidden = true;

//Change background texture
TouchGestures.onTap(plane).subscribe(function (gesture) {

if(status === "stonks"){
  Diagnostics.log('stonks');
    status = "notStonks";
    bg.material = materialNot;
    StonksMask.hidden = true;
    NotStonksMask.hidden = false;
    StonksTxt.hidden = true;
    NotStonksTxt.hidden = false;
    

}else{
  Diagnostics.log('note');

    status = "stonks";

    bg.material = materialStonks;
    NotStonksMask.hidden = true;
    StonksMask.hidden = false;
    StonksTxt.hidden = false;
    NotStonksTxt.hidden = true;
}
  });
})();
