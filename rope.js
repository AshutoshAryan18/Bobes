class Rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetx=X
        this.offsety=Y

        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:offsetX,y:offsetY}
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)

    }
    display(){
        var pos =this.rope.position;
        if(this.rope.bodyA)
        strokeWeight(4);
        line (this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
}