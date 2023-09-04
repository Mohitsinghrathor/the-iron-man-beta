var bgImg,bg
var hero,heroImg
var levithan,levithanImg
var score
var start,startImg
var powerA
var restart,restartImg
var spaceS,spaceSImg,timeS,timeSImg,soulS,soulSImg,realityS,realitySImg,mindS,mindSImg,powerS,powerSImg
var levithanGroup
var gameOver,gameOverImg
var PLAY=1
var END=0
var gameState=0
var powerEli=false
var time=false
var power=0
var cFrameCount=0
var bgm
function preload(){
bgImg= loadImage("bgp.png");
heroImg = loadImage("iron 2.png")
 leviImg = loadImage("o.png")   
gameOverImg = loadImage("go.png")
  bgm = loadSound("BGM.mp3")
startImg = loadImage("s.png")
restartImg = loadImage("rest.png")
spaceSImg = loadImage("s s.png")
timeSImg = loadImage("t s.png")
soulSImg=loadImage("sos.png")
realitySImg=loadImage("r s.png")
powerSImg=loadImage("p s.png")
mindSImg=loadImage("m s.png")
}

function setup() {

    createCanvas(windowWidth, windowHeight);
    
    levithanGroup=new Group();
    

    
    bg = createSprite(windowWidth/2,windowHeight/2);
    bg.addImage("bgp",bgImg);
    bg.scale=2

    start = createSprite(windowWidth/2,windowHeight/2)
    start.addImage("start",startImg)
    start.scale=3
   
    hero = createSprite(100,windowHeight/2)
    hero.addImage("iron",heroImg)
    hero.scale=0.7
    score = 0

    restart = createSprite(windowWidth/2,windowHeight*2+100)
    restart.addImage("restart",restartImg)
    
hero.setCollider("rectangle",0,0,hero.width-70,hero.height-60)
    bgm.loop()
    gameOver = createSprite(77141714,windowHeight/2)
 gameOver.addImage("over",gameOverImg)
}

function draw() {
    background(0)
    
   
    console.log("hello")
    if(!bgm.isPlaying()){
        console.log("not playing")
        bgm.loop()
    }
   
    if(keyDown("space")){gameState=PLAY}
    if(gameState===PLAY){
         restart.visible=false
         
         
         if(score===100){
            var powerS = createSprite(hero.x+100,hero.y)
             powerS.velocityX=-5
             powerS.addImage("p s",powerSImg)
             powerS.scale=0.5
             
               powerS.lifetime=8
            }
            
               
               if(score===400){
                var timeS = createSprite(hero.x+100,hero.y)
                 timeS.velocityX=-5
                 timeS.addImage("t s",timeSImg)
                 timeS.scale=0.5
                 time=true
                   timeS.lifetime=8
                }
             
        hero.y=World.mouseY
    if(bg.x<(windowWidth-windowWidth)+windowWidth/3+75){
        bg.x=windowWidth/2
    }
    gameOver.visible=false
     start.visible=false
    bg.velocityX=-3
    score = score + Math.round(getFrameRate()/60);
    bg.velocityX = -(4 + 3* score/500)
    if(frameCount-cFrameCount>450){
        powerEli=true
    }
    if (score>100 && keyDown("P") && powerEli ){
    powerA()   
     }
    if(power>0){
        power--
        if (power==0){
            powerEli=false
            cFrameCount=frameCount
    
        }
        levithanGroup.destroyEach()
        
    }
    
    
    leviS()
    if(levithanGroup.isTouching(hero)){
        gameState=END
    }
    
   
 if(gameState===END)  {
    levithanGroup.setVelocityXEach(0)
    bg.velocityX=0
    gameOver.visible=true
 gameOver.x=windowWidth/2
 restart.y=windowHeight/2+30
 restart.visible=true
 if(keyDown("space")){
    gameState=PLAY
levithanGroup.destroyEach()
score=0
}
  
 }  } 
 


    drawSprites();
    textSize(20);
    fill(255);
    text("Score:"+ score, windowWidth-100,windowHeight-windowHeight+50);
   if (power>0){
    fill("white")
        stroke("blue")
        textSize(30)
        text("power stone activated",500,100)
   }
   if(score>100){
    fill("white")
        stroke("blue")
        textSize(30)
        text("power stone colected press  {P}  activate the power",500,50)
   
   }
   
}

function leviS(){


    if(World.frameCount % 25 === 0){
        var levithan = createSprite (windowWidth+20,(Math.round(random(windowHeight-windowHeight,windowHeight), 10, 10)));
        levithan.velocityX=-15
        levithan.addImage("levi",leviImg)
        levithan.scale=2
        levithan.velocityX = -(15 + 5* score/50) 
        levithanGroup
       
        
        levithan.setCollider("rectangle",0,0,levithan.width-90,levithan.height-20)
        levithanGroup.add(levithan)
        
    }
}
function powerA(){
 power=150
 
}

