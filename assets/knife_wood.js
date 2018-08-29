    window.onload = function() {

        //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
        //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
        //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

        var game = new Phaser.Game(800, 790, Phaser.CANVAS, '', { preload: preload, create: create, update: update });

        function preload () 
        {

            game.load.image('knife', 'assets/img/knife.png');
            game.load.image('my_wood', 'assets/img/my_wood.png');

        }
        var wood;
        var knife;
        function create () 
        {
            game.stage.backgroundColor = '#efefef';
            // game.stage.x = game.world.centerX;

            knife = this.game.add.sprite(game.world.centerX, 0, 'knife');
            game.physics.enable(knife, Phaser.Physics.ARCADE);
            wood = game.add.sprite(game.world.centerX, (game.world.centerY + 50), 'my_wood');
            wood.anchor.setTo(0.5, 0.5);


            // knife.anchor.setTo(0.5, 0.5);
        }
        function update() 
        {
            wood.angle += 0.5;

            if (game.input.activePointer.isDown)
            {
                knife_shot();
            }
            if (knife.body.y > 130) 
            {
                knife.body.velocity.y= -400;
            }
        }
        function knife_shot() 
        {
            console.log("HEllo");
            knife.body.velocity.y=1000;
            console.log(knife.body.y);

        }
    };
        //     access_log /home/geeksesi/public_html/OnlineAdhanPlayer/access.log;
        // error_log /home/geeksesi/public_html/OnlineAdhanPlayer/error.log;
