var shooter;
var shooterImage;
var bulletImage;
var enemy
var enemyImage
var enemyBulletImmage

function preload() {
  shooterImage = loadImage("soldier1.png")
  bulletImage = loadImage("bullet.png")
  enemyImage = loadImage("enemy.png")
  enemyBulletImage = loadImage("enemyBullet.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  shooter = createSprite(600, 400, 50, 50);
  shooter.addImage(shooterImage)
  shooter.scale = 0.5;
  enemy = createSprite(1000,200,50,50);
  enemy.addImage(enemyImage)
  enemy.scale = 0.2;
}

function draw() {
  background(0,0,0);  

  if(keyDown("space")) {
    spawnBullets();
  }
  
  if(keyDown("up")) {
    shooter.y = shooter.y-5
  }

  if(keyDown("down")) {
    shooter.y = shooter.y+5
  }

  if(keyDown("right")) {
    shooter.x = shooter.x+5
  }

  if(keyDown("left")) {
    shooter.x = shooter.x-5
  }

  if(frameCount % 80 === 0) {
    spawnEnemyBullets();
  }


  drawSprites();
}

 function spawnBullets() {
   var bullet = createSprite(200,200,10,10);
   bullet.x = shooter.x+80;
   bullet.y = shooter.y-32;
   bullet.addImage(bulletImage);
   bullet.velocityX = 15;
   bullet.scale = 0.1;
 }

 function spawnEnemyBullets() {
  var enemyBullet = createSprite(200,200,10,10);
  enemyBullet.x = enemy.x-30;
  enemyBullet.y = enemy.y-50;
  enemyBullet.addImage(enemyBulletImage);
  enemyBullet.velocityX = -15;
  enemyBullet.scale = 0.1;
}