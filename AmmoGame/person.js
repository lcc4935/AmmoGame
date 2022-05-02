/**
 * Lauren Casale
 * creating the dude with the gun
 */

class Person {
    constructor(x, y, colorP1, colorP2, colorP3, state, ammo) {
        //x-coordinate
        this.x = x;
        //y-coordinate
        this.y = y;
        //RGB color of person
        this.colorP1 = colorP1
        this.colorP2 = colorP2
        this.colorP3 = colorP3
        //state
        this.state = state;
        //ammo class
        this.ammo = ammo;
        //ammo count
        this.count = 0
        //fired
        this.fired = false;
    }

    /**
     * display - creating person and gun
     * adjusts based which direction he is facing by state
     */

    display() {

        if (this.state === "faceRight") {
            fill(this.colorP1, this.colorP2, this.colorP3);
            stroke("black");
            strokeWeight(1);

            //person

            //head
            ellipse(this.x, this.y - 20, 30, 30);
            //body
            line(this.x, this.y - 5, this.x, this.y + 50);
            //legs
            line(this.x, this.y + 50, this.x - 15, this.y + 80);
            line(this.x, this.y + 50, this.x + 15, this.y + 80);
            //arm for closer hand
            line(this.x - 10, this.y + 29, this.x + 13, this.y + 29);
            //arm for far hand
            line(this.x, this.y + 15, this.x + 43, this.y + 32)
            //hand by trigger
            stroke("black");
            ellipse(this.x + 13, this.y + 29, 7, 7);

            //shotgun

            //body
            fill("gray");
            stroke("gray");
            rect(this.x + 5, this.y + 15, 60, 12);
            ellipse(this.x + 43, this.y + 27, 22, 6);
            //grip
            strokeWeight(6);
            line(this.x + 8, this.y + 27, this.x + 5, this.y + 37)
            strokeWeight(1);

            //hand in front
            fill(this.colorP1, this.colorP2, this.colorP3);
            stroke("black");
            ellipse(this.x + 43, this.y + 32, 7, 7);

            fill("gray");
            stroke("gray");
            //ammo
            triangle(this.x - 22, this.y + 35, this.x - 20, this.y + 18, this.x + 30, this.y + 15);
            //ammoSpot
            fill("black");
            rect(this.x - 20, this.y + 19, 10, 12);

            fill("red")
            text(this.count, this.x - 18, this.y + 20, this.x - 3, this.y + 27);
        }

        else if (this.state === "faceLeft") {
            fill(this.colorP1, this.colorP2, this.colorP3);
            stroke("black");
            strokeWeight(1);

            //person

            //head
            ellipse(this.x, this.y - 20, 30, 30);
            //body
            line(this.x, this.y - 5, this.x, this.y + 50);
            //legs
            line(this.x, this.y + 50, this.x - 15, this.y + 80);
            line(this.x, this.y + 50, this.x + 15, this.y + 80);

            //arm for closer hand
            line(this.x + 10, this.y + 29, this.x - 13, this.y + 29);
            //arm for far hand
            line(this.x, this.y + 15, this.x - 43, this.y + 32)
            //hand by trigger
            stroke("black");
            ellipse(this.x - 13, this.y + 29, 7, 7);

            //shotgun

            //body
            fill("gray");
            stroke("gray");
            rect(this.x - 65, this.y + 15, 60, 12);
            ellipse(this.x - 43, this.y + 27, 22, 6);

            //grip
            strokeWeight(6);
            line(this.x - 8, this.y + 27, this.x - 5, this.y + 37)
            strokeWeight(1);

            //hand in front
            fill(this.colorP1, this.colorP2, this.colorP3);
            stroke("black");
            ellipse(this.x - 43, this.y + 32, 7, 7);

            fill("gray");
            stroke("gray");
            //ammo
            triangle(this.x - 30, this.y + 15, this.x + 20, this.y + 18, this.x + 22, this.y + 35);
            //ammoSpot
            fill("black");
            rect(this.x + 10, this.y + 19, 10, 12);

            fill("red")
            text(this.count, this.x + 12, this.y + 20, this.x + 3, this.y + 27);

        }
    }

    /**
     * move - moves the person and shotgun
     */

    move() {
        //up
        if (keyIsDown(UP_ARROW)) {
            this.y = this.y - 1;
        }
        else if (keyIsDown(87)) {
            this.y = this.y - 1;
        }
        //down
        else if (keyIsDown(DOWN_ARROW)) {
            this.y = this.y + 1;
        }
        else if (keyIsDown(83)) {
            this.y = this.y + 1;
        }
        //right
        else if (keyIsDown(RIGHT_ARROW)) {
            this.x = this.x + 1;
        }
        else if (keyIsDown(68)) {
            this.x = this.x + 1;
        }
        //left
        else if (keyIsDown(LEFT_ARROW)) {
            this.x = this.x - 1;
        }
        else if (keyIsDown(65)) {
            this.x = this.x - 1;
        }
    }

    /**
    * updateState - determies which direction person is facing
    */

    updateState() {

        //right
        if (keyIsDown(RIGHT_ARROW)) {
            this.state = "faceRight";
        }
        else if (keyIsDown(68)) {
            this.state = "faceRight";
        }
        //left
        else if (keyIsDown(LEFT_ARROW)) {
            this.state = "faceLeft";
        }
        else if (keyIsDown(65)) {
            this.state = "faceLeft";
        }

    }

    /**
    * isInside - determines if person is close to ammo box
    * gives the ok to pick up the ammo if close enough
    */

    isInside(x, y) {
        if ((this.x - 30 < x) && (this.x + 30 > x) && (this.y - 30 < y) && (this.y + 80 > y)) {
            return true
        }
        return false
    }

    /**
    * pickUpAmmo - picking up ammo
    * increases count simulates gathering ammo
    */

    pickUpAmmo(ammo) {
        if (!ammo.pickedUp) {
            this.count = this.count + 3;
        }
    }

    /**
    * fire - fires the gun
    * lowers the count to simulate using ammo
    */

    fire() {
        if (this.count > 0) {
            this.count = this.count - 1;
            this.fired = true;
            return true;
        }
        return false;
    }

    /**
    * aim - turns line red when fired
    */

    aim() {
        if (this.fired) {
            stroke("red");
            strokeWeight(3);
            if (this.state === "faceRight") {
                line(this.x + 70, this.y + 20, this.x + 1000, this.y + 20);
            } else if (this.state === "faceLeft") {
                line(this.x - 1000, this.y + 20, this.x - 70, this.y + 20);
            }
            this.fired = false;
        } else if (!this.fired) {
            stroke("black");
            strokeWeight(1);
            if (this.state === "faceRight") {
                line(this.x + 70, this.y + 20, this.x + 1000, this.y + 20);
            } else if (this.state === "faceLeft") {
                line(this.x - 1000, this.y + 20, this.x - 70, this.y + 20);
            }
        }
    }

}