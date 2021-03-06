import masterRoom from "../rooms/master.js";
import livingRoom from "../rooms/living.js";
import kitchen from "../rooms/kitchen.js";
import dinner from "../rooms/dinnering.js";
import sphere1 from "./static.js";

console.log(sphere1);

const stats = initStats();

let button = document.querySelectorAll(".button");

let scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

let camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.x = 0.01;
camera.lookAt(scene.position);

//controls 

let controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.enableZoom = false;
controls.rotateSpeed = 0.6;
controls.enableDamping = true;
controls.screenSpacePanning = true;

//stats

function initStats() {
    var stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.querySelector("#Stats-output").appendChild(stats.domElement);
    return stats;
}

//spheres

var counter = 1;
let currentSphereImage = masterRoom[`key${counter}`];
let sphereImage = new THREE.TextureLoader().load(currentSphereImage);
let sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
let sphereMaterial = new THREE.MeshBasicMaterial({
    map: sphereImage,
    side: THREE.BackSide
});
let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

let currentSphereImage2 = livingRoom[`key${counter}`];
let sphereImage2 = new THREE.TextureLoader().load(currentSphereImage2);
let sphereGeometry2 = new THREE.SphereGeometry(1, 32, 32);
let sphereMaterial2 = new THREE.MeshBasicMaterial({
    map: sphereImage2,
    side: THREE.BackSide
});

let sphere2 = new THREE.Mesh(sphereGeometry2, sphereMaterial2);

let currentSphereImage3 = kitchen[`key${counter}`];
let sphereImage3 = new THREE.TextureLoader().load(currentSphereImage3);
let sphereGeometry3 = new THREE.SphereGeometry(1, 32, 32);
let sphereMaterial3 = new THREE.MeshBasicMaterial({
    map: sphereImage3,
    side: THREE.BackSide
});

let sphere3 = new THREE.Mesh(sphereGeometry3, sphereMaterial3);

let currentSphereImage4 = dinner[`key${counter}`];
let sphereImage4 = new THREE.TextureLoader().load(currentSphereImage4);
let sphereGeometry4 = new THREE.SphereGeometry(1, 32, 32);
let sphereMaterial4 = new THREE.MeshBasicMaterial({
    map: sphereImage4,
    side: THREE.BackSide
});

let sphere4 = new THREE.Mesh(sphereGeometry4, sphereMaterial4);

let currentSphereImage41 = dinner[`key${2}`];
let sphereImage41 = new THREE.TextureLoader().load(currentSphereImage41);
let sphereGeometry41 = new THREE.SphereGeometry(1, 32, 32);
let sphereMaterial41 = new THREE.MeshBasicMaterial({
    map: sphereImage41,
    side: THREE.BackSide,
});
// sphereMaterial41.map.rotation = 0.001;
// sphereMaterial41.
let sphere41 = new THREE.Mesh(sphereGeometry41, sphereMaterial41);
sphere41.position.x = 1.5;
sphere41.position.z = 1;
// sphere41.rotateOnAxis(new THREE.Vector3(0, 1, 0), 1);
// sphere41.quaternion
//buttons

button[0].addEventListener('click', () => {
    while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
    }
    scene.add(sphere);
})

button[1].addEventListener('click', () => {
    while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
    }
    scene.add(sphere2);
})

button[2].addEventListener('click', () => {
    while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
    }
    scene.add(sphere3);
})

button[3].addEventListener('click', () => {
    while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
    }
    scene.add(sphere4, sphere41);
})

//Tween animation

button[4].addEventListener("click", function() {
    sphere41.material.transparent = true;
    sphere41.material.opacity = 0;
    sphere41.rotation.y = Math.PI;
    let tween = new TWEEN.Tween(sphere41.position).to({ x: 0, z: 0 }, 600).start();
    let tweenOpac = new TWEEN.Tween(sphere41.material).to({ opacity: 1 }, 1300).easing(TWEEN.Easing.Exponential.Out).start();
    sphere4.material.transparent = true;
    let tween2 = new TWEEN.Tween(sphere4.material).to({ opacity: 0 }, 1300).easing(TWEEN.Easing.Exponential.Out).start();
    () => {
        sphere4.remove();
    }

}, false);

//render scene

document.body.appendChild(renderer.domElement);

function renderScene(time) {
    stats.update();
    controls.update();
    TWEEN.update(time)

    requestAnimationFrame(renderScene);
    renderer.render(scene, camera);

}
renderScene();