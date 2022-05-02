/**
 * Lauren Casale
 * creating the ammo boxes
 */

class Ammo {
    constructor(x, y, state) {
        //x-coordinate
        this.x = x
        //y-coordinate
        this.y = y
        //state
        this.state = state;
        this.pickedUp = false
    }

    /**
     * display- creates ammo boxes
     */

    display() {
        stroke("black");
        strokeWeight(.1);

        if (this.pickedUp === false) {
            //ammo

            //gray rectangle part
            fill(105, 105, 103);
            rect(this.x, this.y - 5, 5, 15);
            rect(this.x + 5, this.y - 5, 5, 15);
            rect(this.x + 10, this.y - 5, 5, 15);

            //gold triangle part
            fill(153, 104, 17);
            triangle(this.x, this.y - 5, this.x + 2.5, this.y - 10, this.x + 5, this.y - 5);
            triangle(this.x + 5, this.y - 5, this.x + 7.5, this.y - 10, this.x + 10, this.y - 5);
            triangle(this.x + 10, this.y - 5, this.x + 12.5, this.y - 10, this.x + 15, this.y - 5);

            //box
            fill("black");
            rect(this.x, this.y, 15, 10);
        } else if (this.pickedUp === true) {
            //box
            fill("black");
            rect(this.x, this.y, 15, 10);
        }

    }

}