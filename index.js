import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";

//THREE.js boiler plate code
const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);

document.body.appendChild(renderer.domElement);

//Setting up camera
const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

//Setting up scene
const scene = new THREE.Scene();

//Setting up controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.01;

//Setting up geometory and material
const geo = new THREE.IcosahedronGeometry(1.0,30);
const mat = new THREE.MeshStandardMaterial({
  color: 0xffffff,
});
const wat = new THREE.MeshStandardMaterial({
  color: 0x000000,
  wireframe: true,
});

//Mesh is the container for both geometory and material
const earthMesh = new THREE.Mesh(geo, mat);
const wireMesh = new THREE.Mesh(geo, wat);

scene.add(earthMesh);
// scene.add(wireMesh);

const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500);
scene.add(hemiLight);

function animate() {
  requestAnimationFrame(animate);
//   earthMesh.rotation.x += 0.001;
//   earthMesh.rotation.y += 0.001;
  renderer.render(scene, camera);
  controls.update();
}

animate();
