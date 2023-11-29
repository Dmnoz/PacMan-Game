var pacman2 ={
    x:18,
    y:16
};
var direction2= "right";
var score2 = 0;
var lifes2 = 3;

function displayPacman2(){
    var object2= document.getElementById('pacman');
    object2.style.top = pacman2.y*30+"px";
    object2.style.left = pacman2.x*30+"px";
    object2.style.backgroundImage = "url('images/pacman2-"+direction2+".gif')";
}
displayPacman2();
document.onkeydown =function(e2){
    //console.log(e.keyCode);
    if(e2.keyCode == 37 && world[pacman2.y][pacman2.x-1]!=1){
        pacman2.x --;
        direction2="left";
    }
    else if(e2.keyCode == 39 && world[pacman2.y][pacman2.x+1]!=1){
        pacman2.x ++;
        direction2="right";
    }
    else if(e2.keyCode == 38 && world[pacman2.y-1][pacman2.x]!=1){
        pacman2.y --;
        direction2="up";
    }
    else if(e2.keyCode == 40 && world[pacman2.y+1][pacman2.x]!=1){
        pacman2.y ++;
        direction2="down";
    }
//separar los if, sirve para tener bloques de condicionales
    if(world[pacman2.y][pacman2.x] == 2){
        world[pacman2.y][pacman2.x] = 0;
        score2+=10;
        //displayScore();
        displayWorld();
    }
    if(world[pacman2.y][pacman2.x] == 3){
        world[pacman2.y][pacman2.x] = 0;
        score2+=50;
        //displayScore();
        displayWorld();
    }
    if(world[pacman2.y] == world[red.y] && world[pacman2.x] == world[red.x]){
        lifes2 = lifes2 -1;
        //displayLife();
    }
    displayPacman2();
}