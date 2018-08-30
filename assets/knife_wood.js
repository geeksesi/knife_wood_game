    window.onload = function() 
    {

        var game = new Phaser.Game(750, 1334, Phaser.CANVAS, '', { preload: preload, create: create, update: update });
        function preload () 
        {

            game.load.image('knife', 'assets/img/knife.png');
            game.load.image('my_wood', 'assets/img/my_wood.png');

        }
        var wood;
        var knife;
        var knifeGroup;
        var canThrow;
        var knife2;
        function create () 
        {
            game.stage.backgroundColor = '#efefef';
            // game.stage.x = game.world.centerX;

            knife = game.add.sprite(game.world.centerX, 100, 'knife');

            game.physics.enable(knife, Phaser.Physics.ARCADE);
            wood = game.add.sprite(game.world.centerX, (game.world.centerY + 50), 'my_wood');
            wood.anchor.setTo(0.5, 0.5);
            wood.depth = 1;


            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = true;

            knifeGroup = game.add.group();
            canThrow = true;


        }
        function update() 
        {
            wood.angle += 2;
            game.input.onDown.add(knife_shot);
            key1 = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            key1.onDown.add(knife_shot);
            if (knife.body.y > 450) 
            {
                knife.body.velocity.y= 0;
                knife.body.y = 99;
            }
            else if (knife.body.y < 100) 
            {
                knife.body.velocity.y= 0;
                knife.body.y = 101;
            }

            var children = knifeGroup.children;
            for (var i = 0; i < children.length; i++)
            {

            // rotating the knife
            children[i].angle += 2;

            // turning knife angle in radians
            var radians = Phaser.Math.degToRad(children[i].angle + -90);

            // trigonometry to make the knife rotate around target center
            children[i].x = wood.x + (wood.width / 2) * Math.cos(radians);
            children[i].y = wood.y + (wood.width / 3) * Math.sin(radians);
        
            }
        }
        function knife_shot() 
        {
            knife.body.velocity.y=1500;
            knife.body.y = 403;
            knife2 = game.add.sprite(knife.x, 403, "knife");
            knifeGroup.add(knife2);
   

        }
    };

