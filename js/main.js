const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Box
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: "#DE3163" } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//Torus
const geometry1 = new THREE.TorusGeometry(7, 1, 3, 32);
const material1 = new THREE.MeshBasicMaterial({color:  "#FF69B4"});
const torus = new THREE.Mesh(geometry1, material1);
scene.add(torus);

//Cone
const geometry2 = new THREE.ConeGeometry( 2, 7, 5); 
const material2 = new THREE.MeshBasicMaterial( {color: "#FFC0CB"} );
const cone = new THREE.Mesh(geometry2, material2 ); 
scene.add(cone);

//Circle
const geometry3 = new THREE.CircleGeometry( 7, 36 ); 
const material3 = new THREE.MeshBasicMaterial( { color: "#FFFFFF" } ); 
const circle = new THREE.Mesh( geometry3, material3 ); 
scene.add( circle );

//Circleeyes
const geometry4 = new THREE.CircleGeometry( 1, 36 ); 
const material4 = new THREE.MeshBasicMaterial( { color: "#000000" } ); 
const circle2 = new THREE.Mesh( geometry4, material4 ); 
scene.add( circle2 );

const geometry5 = new THREE.CircleGeometry( 1, 36 ); 
const material5 = new THREE.MeshBasicMaterial( { color: "#000000" } ); 
const circle3 = new THREE.Mesh( geometry4, material4 ); 
scene.add( circle3 );

//Capsule
const geometry6 = new THREE.CapsuleGeometry( 4, 2, 8, 10 ); 
const material6 = new THREE.MeshBasicMaterial( {color: "#D8BFD8"} ); 
const capsule = new THREE.Mesh( geometry6, material6 ); scene.add( capsule );

//Polyhedron
const verticesOfCube = [
    -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1,
    -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1,
];

const indicesOfFaces = [
    2, 1, 0, 0, 3, 2,
    0, 4, 7, 7, 3, 0,
    0, 1, 5, 5, 4, 0,
    1, 2, 6, 6, 5, 1,
    2, 3, 7, 7, 6, 2,
    4, 5, 6, 6, 7, 4,
];

const geometry7 = new THREE.PolyhedronGeometry(verticesOfCube, indicesOfFaces, 2, 2);
const material7 = new THREE.MeshBasicMaterial({color: "#E37383"});
const poly = new THREE.Mesh(geometry7, material7);
scene.add(poly);



camera.position.z = 20;

//Animate
function animate() {
	requestAnimationFrame( animate );
    //Box Rotation
    cube.position.x = 20;
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

    //Cone Rotation
    cone.position.x = -0.1;
    cone.position.y= 10;
    cone.x += -0.01;
    cone.rotation.y += 0.01;

    //Torus Rotation
    torus.x += 0.01;
    torus.y += 0.01;
    torus.rotation.z += 0.5;

    //Circle Rotation
    circle2.position.x = -2;
    circle2.position.y = 2;
    circle2.rotation.x += -0.003;

    circle3.position.x = 2;
    circle3.position.y = 2;
    circle3.rotation.x += -0.003;

    //Capsule Position/Rotation
    capsule.position.x = 0;
    capsule.position.y = -4;
    capsule.position.z = 3;
    capsule.rotation.z += 0.0001;

    //Poly
    poly.position.x = -15;
    poly.position.y = 1;
    poly.rotation.x += 0.01;


  


	renderer.render( scene, camera );
}

animate();