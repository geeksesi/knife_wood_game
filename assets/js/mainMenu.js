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
 *  many code used in this file is copu because i just want to test a game :)
 */

class mainMenu extends Phaser.Scene
{
    constructor()
    {
        super({key: 'mainMenu', active: true});
        
    }

    preload()
    {
        
    }
    create()
    {
        this.logo = this.add.text(200, 150 , "HEllow",{fontSize : "100px",color:"#22222"});
        this.playGame_botton = this.add.text(100, 550 , "Play Game :) ",{fontSize : "70px", color:"#2f2f2f", height: 500, width: 500});
        this.playGame_botton.setInteractive();
        this.playGame_botton.on('pointerdown', this.playGame_now, this);
    }
    update()
    {
    }

    playGame_now() 
    {
        console.log("helloooo");
        this.scene.start('playGame');
    }
}

export default mainMenu;
