import * as THREE from 'three';

// --------------------
// BASIC SETUP
// --------------------
const canvas = document.querySelector('#webgl');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf4d7b5);
scene.fog = new THREE.Fog(0xf4d7b5, 20, 200);

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};

const camera = new THREE.PerspectiveCamera(
  60,
  sizes.width / sizes.height,
  0.1,
  1000
);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;

// --------------------
// LIGHTING (CINEMATIC)
// --------------------
const sun = new THREE.DirectionalLight(0xffc58f, 2);
sun.position.set(10, 20, 10);
sun.castShadow = true;
scene.add(sun);

scene.add(new THREE.AmbientLight(0xffffff, 0.5));

// --------------------
// CURVED ROAD
// --------------------
const curve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(10, 0, -50),
  new THREE.Vector3(-10, 0, -100),
  new THREE.Vector3(5, 0, -150),
  new THREE.Vector3(0, 0, -200)
]);

const roadGeometry = new THREE.TubeGeometry(curve, 200, 3, 20, false);
const roadMaterial = new THREE.MeshStandardMaterial({
  color: 0x333333,
  roughness: 0.8
});
const road = new THREE.Mesh(roadGeometry, roadMaterial);
road.receiveShadow = true;
scene.add(road);

// --------------------
// BUILDINGS (PARIS STYLE)
// --------------------
function createBuilding(x, z) {
  const geometry = new THREE.BoxGeometry(8, 20, 8);
  const material = new THREE.MeshStandardMaterial({
    color: 0xd8c3a5,
    roughness: 0.6
  });

  const building = new THREE.Mesh(geometry, material);
  building.position.set(x, 10, z);
  building.castShadow = true;
  scene.add(building);
}

for (let i = 0; i < 40; i++) {
  createBuilding(25, -i * 10);
  createBuilding(-25, -i * 10);
}

// --------------------
// TREES
// --------------------
function createTree(x, z) {
  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.5, 0.5, 4),
    new THREE.MeshStandardMaterial({ color: 0x8b5a2b })
  );
  trunk.position.set(x, 2, z);

  const leaves = new THREE.Mesh(
    new THREE.SphereGeometry(3, 16, 16),
    new THREE.MeshStandardMaterial({ color: 0x2e8b57 })
  );
  leaves.position.set(x, 6, z);

  scene.add(trunk);
  scene.add(leaves);
}

for (let i = 0; i < 30; i++) {
  createTree(15, -i * 15);
  createTree(-15, -i * 15);
}

// --------------------
// EIFFEL TOWER (GLOWING)
// --------------------
const towerGeometry = new THREE.ConeGeometry(10, 40, 4);
const towerMaterial = new THREE.MeshStandardMaterial({
  color: 0xffd700,
  emissive: 0xffaa00,
  emissiveIntensity: 1
});
const tower = new THREE.Mesh(towerGeometry, towerMaterial);
tower.position.set(0, 20, -220);
scene.add(tower);

// --------------------
// RUNNER (IN FRONT)
// --------------------
const runner = new THREE.Mesh(
  new THREE.BoxGeometry(2, 4, 2),
  new THREE.MeshStandardMaterial({ color: 0xff0000 })
);
runner.position.y = 2;
runner.castShadow = true;
scene.add(runner);

// --------------------
// SCROLL CONTROL
// --------------------
let scrollY = 0;
window.addEventListener('scroll', () => {
  scrollY = window.scrollY;
});

// --------------------
// RESIZE
// --------------------
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

// --------------------
// ANIMATION LOOP
// --------------------
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  const elapsed = clock.getElapsedTime();

  const progress = scrollY * 0.0005;
  const point = curve.getPointAt(progress % 1);
  const tangent = curve.getTangentAt(progress % 1);

  runner.position.copy(point);
  runner.position.y += 2;

  camera.position.copy(point.clone().add(new THREE.Vector3(0, 8, 15)));
  camera.lookAt(point);

  runner.position.y += Math.sin(elapsed * 10) * 0.3;

  renderer.render(scene, camera);
}

animate();