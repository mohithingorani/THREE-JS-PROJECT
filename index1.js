// import * as THREE from "three";
// import { OrbitControls } from "jsm/controls/OrbitControls.js";

// //THREE.js boiler plate code
// const w = window.innerWidth;
// const h = window.innerHeight;
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(w, h);

// document.body.appendChild(renderer.domElement);

// //Setting up camera
// const fov = 75;
// const aspect = w / h;
// const near = 0.1;
// const far = 10;
// const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
// camera.position.z = 2;

// //Setting up scene
// const scene = new THREE.Scene();

// //Setting up controls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.01;

// //Setting up geometory and material
// const geo = new THREE.IcosahedronGeometry(1.0, 2);
// const mat = new THREE.MeshStandardMaterial({
//   color: 0xffffff,
//   flatShading: true,
// });

// //Mesh is the container for both geometory and material
// const mesh = new THREE.Mesh(geo, mat);

// scene.add(mesh);

// const wireMat = new THREE.MeshBasicMaterial({
//   color: 0xffffff,
//   wireframe: true,
// });

// const wireMesh = new THREE.Mesh(geo, wireMat);

// wireMesh.scale.setScalar(1.001);
// mesh.add(wireMesh);

// const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500);
// scene.add(hemiLight);

// let axis = "x"; // initial rotation axis
// let angle = 0; // initial rotation angle

// // function animate(t = 0) {
// //   requestAnimationFrame(animate);
// //   // Update rotation angle
// //   angle += 0.05;

// //   // Rotate around current axis
// //   if (axis === "x") {
// //     mesh.rotation.x = angle/10;
// //   } else if (axis === "y") {
// //     mesh.rotation.y = angle/10;
// //   } else if (axis === "z") {
// //     mesh.rotation.z = angle/10;
// //   }
// //   console.log(angle);

// //   // Switch to next axis when one round is complete
// //   if (angle >= Math.PI * 2) {
// //     angle = 0;
// //     axis = axis === "x" ? "y" : axis === "y" ? "z" : "x";
// //   }

// //   renderer.render(scene, camera);
// //   controls.update();
// // }

// function animate(){
//     requestAnimationFrame(animate);
//     mesh.rotation.x += 0.001;
//     mesh.rotation.y += 0.001;
//     renderer.render(scene, camera);
//     controls.update();
// }

// animate();
