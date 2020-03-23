import masterRoom from "../rooms/master.js";
import livingRoom from "../rooms/living.js";
import kitchen from "../rooms/kitchen.js";
import dinner from "../rooms/dinnering.js";

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
let controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.enableZoom = false;
controls.rotateSpeed = 0.6;
controls.enableDamping = true;
controls.screenSpacePanning = true;

//spheres

var counter = 1;
let currentSphereImage = masterRoom[`key${counter}`];
let sphereImage = new THREE.TextureLoader().load(currentSphereImage);
let sphereGeometry = new THREE.SphereGeometry(10, 32, 32);
let sphereMaterial = new THREE.MeshBasicMaterial({
    map: sphereImage,
    side: THREE.BackSide
});

let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

let currentSphereImage2 = livingRoom[`key${counter}`];
let sphereImage2 = new THREE.TextureLoader().load(currentSphereImage2);
let sphereGeometry2 = new THREE.SphereGeometry(10, 32, 32);
let sphereMaterial2 = new THREE.MeshBasicMaterial({
    map: sphereImage2,
    side: THREE.BackSide
});

let sphere2 = new THREE.Mesh(sphereGeometry2, sphereMaterial2);

let currentSphereImage3 = kitchen[`key${counter}`];
let sphereImage3 = new THREE.TextureLoader().load(currentSphereImage3);
let sphereGeometry3 = new THREE.SphereGeometry(10, 32, 32);
let sphereMaterial3 = new THREE.MeshBasicMaterial({
    map: sphereImage3,
    side: THREE.BackSide
});

let sphere3 = new THREE.Mesh(sphereGeometry3, sphereMaterial3);

let currentSphereImage4 = dinner[`key${counter}`];
let sphereImage4 = new THREE.TextureLoader().load(currentSphereImage4);
let sphereGeometry4 = new THREE.SphereGeometry(10, 32, 32);
let sphereMaterial4 = new THREE.MeshBasicMaterial({
    map: sphereImage4,
    side: THREE.BackSide
});

let sphere4 = new THREE.Mesh(sphereGeometry4, sphereMaterial4);

//buttons

button[0].addEventListener('click', () => {
    scene.remove(sphere2);
    scene.remove(sphere3);
    scene.remove(sphere4);

    scene.add(sphere);
})

button[1].addEventListener('click', () => {
    scene.remove(sphere);
    scene.remove(sphere3);
    scene.remove(sphere4);

    scene.add(sphere2);
})

button[2].addEventListener('click', () => {
    scene.remove(sphere);
    scene.remove(sphere2);
    scene.remove(sphere4);

    scene.add(sphere3);
})

button[3].addEventListener('click', () => {
    scene.remove(sphere);
    scene.remove(sphere2);
    scene.remove(sphere3);

    scene.add(sphere4);
})

document.body.appendChild(renderer.domElement);

function renderScene() {
    controls.update();


    requestAnimationFrame(renderScene);
    renderer.render(scene, camera);

}
renderScene();