class Player{
constructor(x,y,health){
this.x=x
this.y=y
// this.img=img
this.health=health

var man_behaviour={
    resitution:0.5,
    mass:2,
    friction:0.5
}

this.man=Bodies.rectangle(x,y,50,50,man_behaviour)
World.add(world,this.man)

}

show(){
    var angle=this.man.angle
    push()
    rectMode(CENTER)
    rect(this.man.position.x,this.man.position.y,50,50)

    pop()
}


}