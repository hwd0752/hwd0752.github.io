function Bird(info){
    this.x = info.x;
    this.y =info.y;
    this.image = info.image;
    this.ctx = info.ctx;
    // 小鸟的原始速度
    this.speed = 0;
    // 加速度
    this.aspeed = 0.0004;
    // 最大速度
    this.maxapeed = 0.6;
    // 最大角度
    this.maxAngle = 45;
    // 图片的索引
    this.index = 0 ;
    // 上一帧的时间
    this.lastTime = new Date();

}
Bird.prototype = {
    constructor: Bird,
    draw: function(){
        // 1.通过时间差计算速度
        var  currentTime = new Date();
        var deltaTime = currentTime - this.lastTime;
  
        // 2.记录上一次的时间
        this.lastTime = currentTime;

        // 3.计算小鸟的位移
        this.y += this.speed*deltaTime +this.aspeed*deltaTime*deltaTime/2;
      
        // 4.计算小鸟的最后速度(下一帧的起始速度)
        this.speed += this.aspeed*deltaTime;
        
        // 5.切换小鸟的图片
        this.index++;
        // 6.小鸟的旋转
        var birdWidth = this.image.width/3;
        var birdHeight = this.image.height;
        // 保存旋转前的状态
        this.ctx.save();
        var angle = this.speed/this.maxapeed * this.maxAngle;
        if(angle > 45){
            angle = 45;
        }
        var radian = angle/180*Math.PI;
        this.ctx.translate(100+birdWidth/2,this.y - birdHeight/2);
        this.ctx.rotate(radian);
        // 画小鸟
        this.ctx.drawImage(this.image,this.index%3*birdWidth,0,birdWidth,birdHeight,-birdWidth/2,-birdHeight/2,birdWidth,birdHeight);
        this.ctx.restore();
       
    }


}