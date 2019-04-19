window.onload = function () {

    /* --- Initial settings --- */
    /* Scene creation */
    var scene = new THREE.Scene();
    /* Mask creation + change position + touch feature */
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var controls = new THREE.OrbitControls(camera);
    camera.position.set( 0, 20, 130 );
    controls.update();

    /* Renderer creation */
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    /* --- Planets creation --- */
    /* 'Sun' creation */
    var sun_geometry = new THREE.SphereGeometry(10, 32, 32);
    var sun_material = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('Images/SolarTextures/sun.jpg') });
    var sun = new THREE.Mesh(sun_geometry, sun_material);
    sun.matrixAutoUpdate = false;
    scene.add(sun);

    /* 'Earth' creation */
    var earth_geometry = new THREE.SphereGeometry(5, 32, 32);
    var earth_material = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('Images/SolarTextures/earth.jpg') });
    var earth = new THREE.Mesh(earth_geometry, earth_material);
    earth.matrixAutoUpdate = false;
    sun.add(earth);

    /* 'Mars' creation */
    var mars_geometry = new THREE.SphereGeometry(4, 32, 32);
    var mars_material = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('Images/SolarTextures/mars.jpg') });
    var mars = new THREE.Mesh(mars_geometry, mars_material);
    mars.matrixAutoUpdate = false;
    sun.add(mars);

    /* 'Jupiter' creation */
    var jupiter_geometry = new THREE.SphereGeometry(8, 32, 32);
    var jupiter_material = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('Images/SolarTextures/jupiter.jpg') });
    var jupiter = new THREE.Mesh(jupiter_geometry, jupiter_material);
    jupiter.matrixAutoUpdate = false;
    sun.add(jupiter);

    /* --- Moons and Satellites creation --- */
    /* 'Moon' creation (Earth) */
    var moon_geometry = new THREE.SphereGeometry(1, 32, 32);
    var moon_material = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('Images/SolarTextures/moon.jpg') });
    var moon = new THREE.Mesh(moon_geometry, moon_material);
    moon.matrixAutoUpdate = false;
    earth.add(moon);

    /* 'Phobos' creation (Mars) */
    var phobos_geometry = new THREE.SphereGeometry(0.8, 32, 32);
    var phobos_material = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('Images/SolarTextures/phobos.jpg') });
    var phobos = new THREE.Mesh(phobos_geometry, phobos_material);
    phobos.matrixAutoUpdate = false;
    mars.add(phobos);

    /* 'Ganymede' creation (Jupiter) */
    var ganymede_geometry = new THREE.SphereGeometry(2.5, 32, 32);
    var ganymede_material = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('Images/SolarTextures/ganymede.jpg') });
    var ganymede = new THREE.Mesh(ganymede_geometry, ganymede_material);
    ganymede.matrixAutoUpdate = false;
    jupiter.add(ganymede);

    /* 'Background' light creation */
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
    directionalLight.position.set(0, 0, 3).normalize();
    scene.add(directionalLight);

    /* Sunlight creation */
    var pointLight = new THREE.PointLight(0xfcd440, 2.5, 200);
    pointLight.position.set(0, 0, 0).normalize();
    sun.add(pointLight);

    /* Secondary light pointed towards the sun */
    var directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
    sun.add(directionalLight2);


    /* Animations */
    var animate = function () {
        var now = new Date();
        var dt = now - (animate.time || now)
        animate.time = now;

        /* Sun animation */
        sun.matrix = new THREE.Matrix4().makeRotationY(animate.time * 0.001);

        /* Earth animation */
        var earth_rotation = new THREE.Matrix4().makeRotationY(animate.time * 0.002);
        var earth_translation = new THREE.Matrix4().makeTranslation(25, 0, 0);
        earth.matrix = earth_rotation.multiply(earth_translation);

        /* Mars animation */
        var mars_rotation = new THREE.Matrix4().makeRotationY(animate.time * 0.001);
        var mars_translation = new THREE.Matrix4().makeTranslation(43, 0, 0);
        mars.matrix = mars_rotation.multiply(mars_translation);

        /* Jupiter animation */
        var jupiter_rotation = new THREE.Matrix4().makeRotationY(animate.time * 0.0005);
        var jupiter_translation = new THREE.Matrix4().makeTranslation(72.5, 0, 0);
        jupiter.matrix = jupiter_rotation.multiply(jupiter_translation);

        /* Moon (Earth) animation */
        var moon_rotation = new THREE.Matrix4().makeRotationY(animate.time * 0.001);
        var moon_translation = new THREE.Matrix4().makeTranslation(7, 0, 0);
        moon.matrix = moon_rotation.multiply(moon_translation);

        /* Phobos animation */
        var phobos_rotation = new THREE.Matrix4().makeRotationY(animate.time * 0.002);
        var phobos_translation = new THREE.Matrix4().makeTranslation(5.3, 0, 0);
        phobos.matrix = phobos_rotation.multiply(phobos_translation);

        /* Ganymede animation */
        var ganymede_rotation = new THREE.Matrix4().makeRotationY(animate.time * 0.0025);
        var ganymede_translation = new THREE.Matrix4().makeTranslation(12.5, 0, 0);
        ganymede.matrix = ganymede_rotation.multiply(ganymede_translation);

        controls.update();
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };
    animate();

}
