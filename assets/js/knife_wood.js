/**
 *  made by : Mohammad Javad Ghasemy & homayon naseery
 *  email : geeksesi [at] gmail [dot] com
 *  github : https://github.com/geeksesi
 *  game page : https://geeksesi.github.io/knife_wood_game
 * 
 *  v1.0.0 fun
 *
 *  by phaser 3.12.0
 *
 *  if you need more info please tell me :D 
 * 
 */

var game;

window.onload = function() 
{

    var gameConfig = 
    {
       type: Phaser.AUTO,
       width: 750,
       height: 1334,
       backgroundColor: 0xffffff,
       scene: [mainMenu, playGame]
    };

    game = new Phaser.Game(gameConfig);

    window.focus()
    resize();
    window.addEventListener("resize", resize, false);
}


import mainMenu from './mainMenu.js';
import playGame from './playGame.js';
// playGame.gameOptions = gameOptions;
playGame.game = game;

// var mainMenu = new mainMenu();


function resize() {
    var canvas = document.querySelector("canvas");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = game.config.width / game.config.height;
    if(windowRatio < gameRatio){
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    }
    else{
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}