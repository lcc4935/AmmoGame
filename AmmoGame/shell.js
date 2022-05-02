/**
 * Lauren Casale
 * creating the ammo shells
 */

class Shell {
    constructor(x, y) {
        //x-coordinate
        this.x = x
        //y-coordinate
        this.y = y
    }

    /**
     * display- creates ammo shells
     */

    display() {
        stroke("black");
        strokeWeight(.1);

        //gray rectangle part
        fill(105, 105, 103);
        rect(this.x - 27, this.y + 75, 15, 5);
        //gold triangle part
        fill(153, 104, 17);
        triangle(this.x - 32, this.y + 77.5, this.x - 27, this.y + 75, this.x - 27, this.y + 80);

    }

}