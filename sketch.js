var dog, happyDog, database, foodS, foodStock;
foodS=20;
function preload()
{
dogImg=loadImage("images/dogImg.png");
happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
  console.log(database);

	createCanvas(800,600);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  dog=createSprite(350,350,50,50);
  dog.addImage(dogImg);
  dog.scale=0.4;

}


function draw() {  
  background(46, 139, 87);





  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();




strokeWeight(2);
  stroke(0);
  textSize(15);
  fill("red");
  text("NOTE: PRESS UP_ARROW TO FEED DRAGO MILK",20,40);
text("Food Remaining :"+foodS,250,100);
  
  //add styles here

}

function readStock(data){
  foodS=data.val();
  }
  
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x

  })
}




