var Engine=Matter.Engine
var Body=Matter.Body
var Bodies=Matter.Bodies
var World=Matter.World

var man_behaviour 
var player1,engine,world

// diamonds,player,obstacles



function preload(){

}

function setup(){
createCanvas(800,800)   
engine=Engine.create()
world=engine.world


player1=new Player(100,700,200)

}

function draw(){
background("cyan")
Engine.update(engine)

man1.show()

}