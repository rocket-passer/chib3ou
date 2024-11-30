// Sélectionne le conteneur de la visionneuse
const viewer = document.getElementById('viewer');

// ya3ml el création t3 el cam w el render (settings)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, viewer.clientWidth / viewer.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(viewer.clientWidth, viewer.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio); // Ajuste la qualité de rendu pour les écrans haute densité
viewer.appendChild(renderer.domElement);

// settings t3 el visionnage
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.1;
controls.rotateSpeed = 0.5;

// lumiere
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);

// loading ta3 el model 
const loader = new THREE.GLTFLoader();
loader.load(
    'nikeboots.glb', //7ot el model houn
    function (gltf) {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(0, -1, 0);
        animate();
    },
    undefined,
    function (error) {
        console.error('Erreur de chargement du modèle', error);
    }
);

// el position initiale ta3 el cam
camera.position.set(0, 1, 3);
/////////////////////////////////////men hna manich fehem el settings /////////////////////////////
// Fonction d'animation
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}


// Ajustement du rendu lors du redimensionnement
window.addEventListener('resize', () => {
    renderer.setSize(viewer.clientWidth, viewer.clientHeight);
    camera.aspect = viewer.clientWidth / viewer.clientHeight;
    camera.updateProjectionMatrix();
});

animate();