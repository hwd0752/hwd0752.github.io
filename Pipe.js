function Pipe(info){
    this.x = info.x;
    this.canvas = info.canvas;
    this.ctx = info.ctx;
    this.bottomy = info.bottomy;
    this.topImage = info.topImage;
    this.bottomImage = info.bottomImage;
    this.gap = info.gap;
    this.speed = -2;
    this.topHeight = 0;
    this.bottomHeight = 0;
    this.initHeight();
    // setInterval(this.initHeight(),1000);

}
Pipe.prototype = {
    constructor:Pipe,
    draw: function (){
        // 1.移动
        // this.initHeight();
        this.x += this.speed; 
        // 2.判断是否移出了一根柱子的宽度，把柱子移动到最后面
        if(this.x <= - this.topImage.width){
            console.log(2);
            this.x = this.canvas.width - this.topImage.width+this.gap;
        }
        //画出小鸟装柱子的管道路径
        this.ctx.rect(this.x,0,this.topImage.width,this.topHeight);
        this.ctx.rect(this.x,this.topHeight+100,this.bottomImage.width,this.bottomHeight);

        // 3.画上面的柱子
        this.ctx.drawImage(this.topImage,this.x,0,this.topImage.width,this.topHeight);
        // 4.画下面的柱子
        this.ctx.drawImage(this.bottomImage,this.x,this.topHeight+100,this.bottomImage.width,this.bottomHeight);

    },
    initHeight: function (){
        this.topHeight = Math.random()*180+100;
        this.bottomHeight =this.canvas.height- this.bottomy - this.topHeight - 100;
    }


}