var bgImg, bg;
var gameState = 0
var startImgSprite, startImg;
var launchingSpaceCraft, launchingSpaceCraftImg;
var spaceCraft, spaceCraftImg;
function preload() {
  bgImg = loadImage("Images/background.jpg")
  startImg = loadImage("Images/StartingImgText.jpg")
  launchingSpaceCraftImg = loadImage("Images/rocket1.png")
  spaceCraftImg = loadImage("Images/spacecraft.png")
}

function setup() {
  createCanvas(displayWidth, displayHeight - 111);

  //for infinite ground
  bg = createSprite(950, 500, 400, 20);
  bg.addImage("stars", bgImg)
  bg.scale = 3.5
  bg.visible = false

  startImgSprite = createSprite(displayWidth / 2, displayHeight / 2, 10, 10)
  startImgSprite.addImage("start", startImg)
  startImgSprite.scale = 1.65
  startImgSprite.visible = false

  launchingSpaceCraft = createSprite(300, 700, 10, 10)
  launchingSpaceCraft.addImage("launch", launchingSpaceCraftImg)
  launchingSpaceCraft.scale = 0.75
  launchingSpaceCraft.visible = false

  spaceCraft = createSprite(130, displayHeight / 2, 10, 10)
  spaceCraft.addImage("spaceCraft", spaceCraftImg)
  spaceCraft.visible = false


}

function draw() {
  console.log(gameState)
  background("black")
  if (gameState === 0) {
    startImgSprite.visible = true
  }
  if (keyCode === 13) {
    startImgSprite.visible = false
    launchingSpaceCraft.visible = true
    launchingSpaceCraft.velocityX = 20
    launchingSpaceCraft.velocityY = -16
    gameState = 1
    if (launchingSpaceCraft.y < -250) {
      gameState = 2
    }

  }
  if (gameState === 2) {
    bg.visible = true
    spaceCraft.visible = true



    if (keyCode === 39) {
      //bg.velocityX=10   
      spaceCraft.x = spaceCraft.x + 10

    }

    if (keyCode === 37) {
      spaceCraft.x = spaceCraft.x
    }



  }
  drawSprites();
}