import BABYLON from 'babylonjs';

// get the canvas element from our HTML below
var canvas = document.querySelector("#renderCanvas");
// load the BABYLON 3D engine
var engine = new BABYLON.Engine(canvas, true);

// here begins a function that we will 'call' just after it's built
var createScene = function () {
    //now create a basic Babylon Scene object
    var scene = new BABYLON.Scene(engine);
    //change the scene background color to green
    scene.clearColor = new BABYLON.Color3(0, 1, 0);
    //this creates and positions a free camera
    var camera = new BABYLON.FreeCamera("freecamera", new BABYLON.Vector3(0, 5, -10), scene);
    //this targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());
    //this attaches the camera to the canvas
    camera.attachControl(canvas, false);
    //this create a light, aiming 0,1,0 - to the sky
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    //dim the light a small amount
    light.intensity = .5;
    //let's try out built-in 'sphere' shape. Params: name, subdivisions, size, scene
    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
    //move the sphere upward 1/2 its height
    sphere.position.y = 1;
    //let's try out built-in 'ground' shape. Params: name, width, depth, subdivisions, scene
    var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
    //leave this function
    return scene;
}; //end of createScene function

//now, call the createScene function that you just finished creating
var scene = createScene();

//register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
    scene.render();
});

//watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});