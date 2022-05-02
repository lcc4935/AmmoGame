/**
 * Lauren Casale
 * IGME-101: Project 3, 12/4/2019
 * Dude running around, picking up ammo and shooting the air
 */

"use strict"; //catch some common coding errors

//Variables

let person;
let person1;
let person2;
let ammo;

let ammoBoxArray;
let shellArray;

/**
 * setup :
 */
function setup() {
    createCanvas(600, 600);
    background(165, 147, 120);
    //setting up arrays
    ammoBoxArray = [];
    shellArray = [];
    //calling person class
    person1 = new Person(30, 40, 200, 170, 127, "faceRight", ammoBoxArray);
    person2 = new Person(30, 500, 106, 72, 11, "faceRight", ammoBoxArray);
    //starting person
    person = person1;
    //adding to ammoBoxArray by calling ammo class
    for (let i = 0; i < 10; i = i + 1) {
        ammoBoxArray.push(new Ammo(random(75, 575), random(75, 575)));
    }

}

/**
 * draw :
 */
function draw() {
    background(165, 147, 120);
    person1.display();
    person2.display();

    //making the ammo appear through array
    for (let i = 0; i < ammoBoxArray.length; i = i + 1) {
        ammoBoxArray[i].display();
        if (person.isInside(ammoBoxArray[i].x, ammoBoxArray[i].y)) {
            person.pickUpAmmo(ammoBoxArray[i])
            ammoBoxArray[i].pickedUp = true;
        }

    }
    //making shells appear through array
    for (let i = 0; i < shellArray.length; i = i + 1) {
        shellArray[i].display();
    }
    //person moving and making gun fire turn red
    person.move();
    person.updateState();
    person.aim();
}

/**
 * mouseClicked - fires gun and drops shell when mouse is clicked
 */

function mouseClicked() {
    if (person.fire()) {
        shellArray.push(new Shell(person.x, person.y));
    }

}

/**
 * keyTyped - determines which guy to be in control
 */

function keyTyped() {
    if (key === "1") {
        person = person1;
    } else if (key === "2") {
        person = person2;
    }
}