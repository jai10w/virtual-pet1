var dog, happyDog, database, foodS, foodStock;

function preload(){

  loadImage ("dog.png");
  loadImage ("happydog.png");
}

function setup() {

  createCanvas(500, 500);
  
  dog = createSprite(250, 250, 50, 50);
  dog.loadImage(dog.png);

  database = firebase.database;

  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
}


function draw() {  

  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addimage(happydog.png);
  }

  drawSprites();

  
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}