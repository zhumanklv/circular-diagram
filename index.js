const canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



class Circle {
    constructor(xpos, ypos, radius, color) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
    }
    draw(context) {

        context.fillStyle = "black";
        context.beginPath();
        context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
        context.fill();
        context.stroke();

    }

    drawArc(radius, color, beginAngle, endAngle) {
        context.fillStyle = color;
        context.beginPath();
        context.arc(this.xpos, this.ypos, radius, beginAngle, endAngle);
        context.fill();
        context.stroke();
        context.closePath();


        context.fillStyle = color;
        context.beginPath();
        context.moveTo(this.xpos, this.ypos);
        context.lineTo(this.xpos + radius * Math.cos(beginAngle), this.ypos + radius* Math.sin(beginAngle));
        context.lineTo(this.xpos + radius * Math.cos(endAngle), this.ypos + radius * Math.sin(endAngle));
        context.fill();
        context.strokeStyle = color;
        context.lineWidth = 0.000001;
        context.stroke();
    }
}

let my_circle = new Circle(700, 400, 33, 'black');


my_circle.drawArc(200, '#EB5757', 0, 2);
my_circle.drawArc(250, '#F2994A', 2, 3);
my_circle.drawArc(100, '#6FCF97', 3, 4.5);
my_circle.drawArc(350, '#9B51E0', 4.5, 4.8);
my_circle.drawArc(300, '#2F80ED', 4.8, 5);
my_circle.drawArc(330, '#56CCF2', 5, 5.1);
my_circle.drawArc(400, '#219653', 5.1, 5.2);
my_circle.drawArc(420, '#F2C94C', 5.2, Math.PI * 2);
my_circle.draw(context);