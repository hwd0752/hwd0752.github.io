function Sky(info){
    // 天空在画布的水平方向的位置
    this.x = info.x;
    this.canvas = info.canvas;
    this.ctx = info.ctx;
    this.image = info.image;
    this.speed = -2;
}
Sky.prototype = {
    constructor: Sky,
    draw: function (){
        this.x += this.speed; 
        if(this.x <= -this.canvas.width){
            this.x = this.canvas.width;
        }
        // 显示出天空的图片
        this.ctx.drawImage(this.image,this.x,0,this.canvas.width,this.canvas.height);

    }
}