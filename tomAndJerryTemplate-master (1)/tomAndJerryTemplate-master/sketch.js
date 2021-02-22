var gardenImg;
function preload() {
    gardenImg = loadImage("images/garden.png");
    mouseteasingImg = loadAnimation("images/mouse3.png");
    catsittingImg = loadAnimation("images/cat1.png");
    catrunningImg = loadAnimation("images/cat2.png","images/cat3.png");
    catstandingImg = loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(500,400,1,1);
    garden.addImage(gardenImg);
    //create tom and jerry sprites here
    mouse = createSprite(150,600,1,1);
    mouse.addAnimation("teasing", mouseteasingImg);
    mouse.scale = 0.2;
    cat = createSprite(850,600,1,1);
    cat.addAnimation("sitting", catsittingImg);
    cat.scale = 0.2;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(isTouching(cat,mouse)){
        cat.addAnimation("standing", catstandingImg);
        cat.changeAnimation("standing");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("running", catrunningImg);
        cat.changeAnimation("running");
    }

}
function isTouching(object1, object2){
    if(object1.x - object2.x <= object1.width/2 + object2.width/2 && object2.x - object1.x <= object1.width/2 + object2.width/2 && object1.y - object2.y <= object1.height/2 + object2.height/2&&object2.y - object1.y <= object1.height/2 + object2.height/2){
      return true;
    }
    else{
      return false;
    }
}
