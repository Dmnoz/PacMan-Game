// JS display world (identificar: bricks, empty, coin).
var world = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,2,2,2,2,2,1,3,1,3,2,1,1,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,2,1,1,1,2,1,2,2,2,2,2,2,2,1,1,1,2,1,2,1,2,0,1],
    [1,2,1,1,2,2,2,1,2,1,2,2,2,1,3,1,1,1,2,1,1,1,1,2,1],
    [1,2,1,1,2,2,2,1,2,1,2,2,2,1,0,2,1,1,2,1,2,2,2,2,1],
    [1,2,1,1,2,2,2,2,2,1,1,1,2,1,2,2,1,1,2,1,1,2,2,2,1],
    [1,2,1,1,2,2,2,2,2,1,1,2,2,1,1,3,2,2,2,3,1,2,2,2,1],
    [1,2,2,2,2,2,2,1,1,1,1,2,2,1,1,2,2,2,2,1,1,2,1,1,1],
    [1,2,2,2,2,2,2,1,2,1,1,2,2,1,1,2,2,2,2,1,2,2,2,2,1],
    [1,1,1,2,2,2,2,1,2,1,1,2,2,1,1,2,2,2,2,1,2,2,2,2,1],
    [1,2,2,2,2,2,1,1,2,0,0,2,2,2,2,2,1,1,2,2,2,2,1,1,1],
    [1,2,2,2,2,2,2,2,2,1,1,2,2,1,1,2,1,1,2,1,1,1,1,1,1],
    [1,2,2,2,2,2,1,2,2,2,2,2,2,2,1,2,1,1,2,2,2,3,1,3,1],
    [1,1,1,1,1,1,1,2,2,1,1,2,2,2,1,3,3,1,2,1,1,1,1,2,1],
    [1,2,2,2,2,1,1,2,2,1,1,2,2,2,1,3,3,1,2,1,2,2,2,2,1],
    [1,2,1,2,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,1],
    [1,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,2,2,2,1,2,1,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,2,2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1],
    [1,3,1,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
]
//registro de puntajes
//pacman player 1
var score_n = 0;
var lifes_n = 1;
//pacman player 2
var score_np2 = 0;
var lifes_np2 = 1;

//posicion del pacman, pacman2 y red.
var pacman ={
    x:1,
    y:1
};
var pacman2 ={
    x:23,
    y:2
};
var red ={
    x:14,
    y:4
};
var green ={
    x:5,
    y:12
};
//cambios de direccion de pacman 1 y pacman 2
var direction= "right";
var direction2= "left";
//utiliza la matriz world para crear ambiente de pacman en HTML.
function displayWorld(){
    var output="";
    for (var i=0;i<world.length; i++) {
        output += "\n\t<div class='row'>";
        for (var j=0; j<world[i].length;j++){
            if (world[i][j] == 0) {
                output += "\n\t\t<div class='empty'></div>";
            }
            if (world[i][j] == 1) {
                output += "\n\t\t<div class='brick'></div>";
            }
            if (world[i][j] == 2) {
                output += "\n\t\t<div class='coin'></div>";
            }
            if (world[i][j] == 3) {
                output += "\n\t\t<div class='cherry'></div>";
            }
        }
        output += "\n\t</div>"
    }
    //console.log(output);
    document.getElementById('world').innerHTML = output;
}
// utilizar posicioin del pacman para ubicarlo como objeto JS
function displayPacman(){
    var object= document.getElementById('pacman');
    object.style.top = pacman.y*30+"px";
    object.style.left = pacman.x*30+"px";
    object.style.backgroundImage = "url('images/pacman-"+direction+".gif')";
    if (lifes_n<=0){
        object.style.backgroundImage = "url('images/angel_wings2.gif')";
    }
}
function displayPacman2(){
    var object2= document.getElementById('pacman2');
    object2.style.top = pacman2.y*30+"px";
    object2.style.left = pacman2.x*30+"px";
    object2.style.backgroundImage = "url('images/images2/pacman2-"+direction2+".gif')";
    if (lifes_np2 <= 0){
        object2.style.backgroundImage = "url('images/angel_wings2.gif')";
    }
}
// configurar fantasma
function displayRed(){
    var object_r= document.getElementById('red');
    object_r.style.top = red.y*30+"px";
    object_r.style.left = red.x*30+"px";
    //object_r.style.backgroundImage = "url('images/pacman-"+direction+".gif')";
}
function displayGreen(){
    var object_g= document.getElementById('green');
    object_g.style.top = green.y*30+"px";
    object_g.style.left = green.x*30+"px";
    //object_r.style.backgroundImage = "url('images/pacman-"+direction+".gif')";
}
//configurar puntaje y vida
function displayScore(){
    document.getElementById("score_n").innerHTML = score_n;
}
function displayLife(){
    document.getElementById("lifes_n").innerHTML = lifes_n;
}
function displayScore2(){
    document.getElementById("score_np2").innerHTML = score_np2;
}
function displayLife2(){
    document.getElementById("lifes_np2").innerHTML = lifes_np2;
}

//mostrar mundo, pacman, puntaje, fantasma y vida.
displayWorld();
displayPacman();
displayScore();
displayLife();
displayScore2();
displayLife2();
displayRed();
displayGreen();
displayPacman2();


//jugadores
document.onkeydown =function(e){
    //console.log(e.keyCode);
    if (lifes_n > 0) {
        if(e.keyCode == 37 && world[pacman.y][pacman.x-1]!=1){
            pacman.x --;
            direction="left";
        }
        else if(e.keyCode == 39 && world[pacman.y][pacman.x+1]!=1){
            pacman.x ++;
            direction="right";
        }
        else if(e.keyCode == 38 && world[pacman.y-1][pacman.x]!=1){
            pacman.y --;
            direction="up";
        }
        else if(e.keyCode == 40 && world[pacman.y+1][pacman.x]!=1){
            pacman.y ++;
            direction="down";
        }
        displayPacman();
    }
//separar los if, sirve para tener bloques de condicionales
    if(world[pacman.y][pacman.x] == 2){
        world[pacman.y][pacman.x] = 0;
        score_n+=20;
        displayScore();
        displayWorld();
    }
    if(world[pacman.y][pacman.x] == 3){
        world[pacman.y][pacman.x] = 0;
        score_n+=50;
        displayScore();
        displayWorld();
    }
    if(world[pacman.y] == world[red.y] && world[pacman.x] == world[red.x]){
        lifes_n = lifes_n - 1;
        displayLife();
    }
    if(world[pacman.y] == world[green.y] && world[pacman.x] == world[green.x]){
        lifes_n = lifes_n - 1;
        displayLife();
    }
    //player 2
    if (lifes_np2 >0) {
    if(e.keyCode == 65 && world[pacman2.y][pacman2.x-1]!=1){
        pacman2.x --;
        direction2="left";
    }
    else if(e.keyCode == 68 && world[pacman2.y][pacman2.x+1]!=1){
        pacman2.x ++;
        direction2="right";
    }
    else if(e.keyCode == 87 && world[pacman2.y-1][pacman2.x]!=1){
        pacman2.y --;
        direction2="up";
    }
    else if(e.keyCode == 83 && world[pacman2.y+1][pacman2.x]!=1){
        pacman2.y ++;
        direction2="down";
    }
    displayPacman2();
}
//player 2

    if(world[pacman2.y][pacman2.x] == 2){
        world[pacman2.y][pacman2.x] = 0;
        score_np2+=20;
        displayScore2();
        displayWorld();
    }
    if(world[pacman2.y][pacman2.x] == 3){
        world[pacman2.y][pacman2.x] = 0;
        score_np2+=50;
        displayScore2();
        displayWorld();
    }
    if(world[pacman2.y] == world[red.y] && world[pacman2.x] == world[red.x]){
        lifes_np2 = lifes_np2 - 1;
        displayLife2();
    }
    if(world[pacman2.y] == world[green.y] && world[pacman2.x] == world[green.x]){
        lifes_np2 = lifes_np2 - 1;
        displayLife2();
    }
    displayPacman();
    displayPacman2();

    if (lifes_np2 <=0 && lifes_n <=0){
        var gameover = document.getElementById('GameOver');
        gameover.style.zIndex=1;
        displayWorld();
    }
}

//mover aleatoriamente a los fantasmas
setInterval(moveRed, 200);
function moveRed(){
    var roll= Math.floor(Math.random()*4)+1;
    if(roll == 1 && world[red.y][red.x-1]!=1){
        red.x--;
    }
    else if(roll==2 && world[red.y][red.x+1]!=1){
        red.x++;
    }
    else if(roll ==3 && world[red.y-1][red.x]!=1){
        red.y--;
    }
    else if(roll==4 && world[red.y+1][red.x]!=1){
        red.y++;
    }
    displayRed();
    //console.log(roll,red.x, red.y);
}
setInterval(moveGreen, 200);
function moveGreen(){
    var roll2= Math.floor(Math.random()*4)+1;
    if(roll2 == 1 && world[green.y][green.x-1]!=1){
        green.x--;
    }
    else if(roll2==2 && world[green.y][green.x+1]!=1){
        green.x++;
    }
    else if(roll2 ==3 && world[green.y-1][green.x]!=1){
        green.y--;
    }
    else if(roll2==4 && world[green.y+1][green.x]!=1){
        green.y++;
    }
    displayGreen();
    //console.log(roll,red.x, red.y);
}