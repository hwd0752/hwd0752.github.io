function Land(info) {
    this.x = info.x;
    this.y = info.y;
    this.canvas = info.canvas;
    this.image = info.image;
    this.ctx = info.ctx;
    this.speed = -2;

}
Land.prototype = {
    constructor: Land,
    draw: function () {
        this.x += this.speed;
        if(this.x <= -this.canvas.width/4){
            this.x = this.canvas.width;
        }  

        this.ctx.drawImage(this.image,this.x,this.y,this.canvas.width/4,this.canvas.height- this.y);



    }



}