# Introduction
This exercise was designed to familiarize with the [three.js](https://threejs.org/) library. 

# Task Description
Develop a Javascript application (using the `three.js` library) that shows a 3D simulation of the motion of some planets in a hypothetical solar system.

The system is composed of a star (e.g. the sun), placed in the center, and two main planets that orbit around the star with circular orbits of radius `r2 > r1`.

Each of the planets has a moon that orbits around it. Even in this case, for simplicity, consider the circular orbits.

# Result/Testing
You can run the developed application by opening the `index.html` through a browser. The expected result should be equals to the one represented in the following GIF. 

In the `Scripts/render.js` file you'll find the implentation of the Javascript/Three.js part.

**N.B.** In order to execute succesfully and without any erros this task you'll need to run it through a local web server (e.g. [200 Ok - Chrome Web Server](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en))

![GIF Result](https://github.com/FabioDainese/Languages_for_Web_and_Networking_Applications/blob/master/WebGL%20and%20ThreeJS/Images/result.gif)
