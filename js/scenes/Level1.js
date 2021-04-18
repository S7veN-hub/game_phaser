class Level1 extends Phaser.Scene {
    constructor() {
        super({key: "Level 1"});
    }

    preload() {
        this.load.path = "./assets/";

        this.load.atlas("dog", "dog/dog.png", "dog/dog_atlas.json");
        this.load.atlas("cat", "cat/cat.png", "cat/cat_atlas.json");

        this.load.atlas("aliens", "aliens/aliens.png", "aliens/aliens_atlas.json");
    }
    create() {
        console.log(this);
        this.atlas = "dog";
        this.width = 800;
        this.height = 600;

        this.heroe = this.physics.add.sprite(400, 300, "dog").setScale(0.15);
        this.heroe.setCollideWorldBounds(true);

        this.alien1 = this.physics.add.sprite(50, 50, "aliens").setScale(1.5);
        this.alien2 = this.physics.add.sprite(this.width - 50, 50, "aliens").setScale(1.5);
        this.alien3 = this.physics.add.sprite(this.width - 50, this.height - 50, "aliens").setScale(1.5);
        this.alien4 = this.physics.add.sprite(50, this.height - 50, "aliens").setScale(1.5);
        
        //animations
        this.anims.create({  //heroe animations
            key: "walk_right",
            frames: this.anims.generateFrameNames(this.atlas, {
                prefix: "run_r_",
                start: 1,
                end: 7
            }),
            repeat: -1,
            frameRate: 10
        });
        this.anims.create({
            key: "walk_left",
            frames: this.anims.generateFrameNames(this.atlas, {
                prefix: "run_",
                start: 1,
                end: 7
            }),
            repeat: -1,
            frameRate: 10
        });
        this.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNames(this.atlas, {
                prefix: "idle_",
                start: 1,
                end: 9
            }),
            repeat: -1,
            frameRate: 20
        });
        this.anims.create({      //aliens animations
            key: "alien_right",
            frames: this.anims.generateFrameNames("aliens", {
                prefix: "aliens_",
                start: 24,
                end: 26
            }),
            repeat: -1,
            frameRate: 15
        });
        this.anims.create({
            key: "alien_left",
            frames: this.anims.generateFrameNames("aliens", {
                prefix: "aliens_",
                start: 12,
                end: 14
            }),
            repeat: -1,
            frameRate: 15
        });
        this.anims.create({
            key: "alien_up",
            frames: this.anims.generateFrameNames("aliens", {
                prefix: "aliens_",
                start: 36,
                end: 38
            }),
            repeat: -1,
            frameRate: 15
        });
        this.anims.create({
            key: "alien_down",
            frames: this.anims.generateFrameNames("aliens", {
                prefix: "aliens_",
                start: 0,
                end: 2
            }),
            repeat: -1,
            frameRate: 15
        });
        //animations

        //tweens(aliens' movements)
        this.timeline1 = this.tweens.timeline({
           
            tweens: [
                {
                    targets: this.alien1,
                    x: this.width / 2 - 50,
                    duration: 1500,
                    onStart: () => {
                        //this.alien1.anims.play("alien_right", true);
                        console.log("hola");
                    }
                },
                {
                    targets: this.alien1,
                    y: this.height / 2 - 50,
                    duration: 1500,
                    onStart: () => {
                        //this.alien1.anims.play("alien_down", true);
                        console.log("hola");
                    }
                },
                {
                    targets: this.alien1,
                    x: 50,
                    duration: 1500,
                    onStart: () => {
                        // this.alien1.anims.play("alien_left", true);
                        console.log("hola");
                    }
                },
                {
                    targets: this.alien1,
                    y: 50,
                    duration: 1500,
                    onStart: () => {
                        // this.alien1.anims.play("alien_up", true);
                        console.log("hola");
                    }
                }
            ],
            onComplete: () => {
                this.events.emit("repeat");
            }
        });
        
        this.timeline3 = this.tweens.timeline({
    
            tweens: [
                {
                    targets: this.alien3,
                    x: this.width / 2 + 50,
                    duration: 1500,
                    onStart: () => {
                        this.alien3.anims.play("alien_left", true);
                    }
                },
                {
                    targets: this.alien3,
                    y: this.height / 2 + 50,
                    duration: 1500,
                    onStart: () => {
                        this.alien3.anims.play("alien_up", true);
                    }
                },
                {
                    targets: this.alien3,
                    x: this.width - 50,
                    duration: 1500,
                    onStart: () => {
                        this.alien3.anims.play("alien_right", true);
                    }
                },
                {
                    targets: this.alien3,
                    y: this.height - 50,
                    duration: 1500,
                    onStart: () => {
                        this.alien3.anims.play("alien_down", true);
                    }
                }
            ]
        });
        
        this.timeline4 = this.tweens.timeline({
            
            tweens: [
                {
                    targets: this.alien4,
                    y: this.height / 2 + 50,
                    duration: 1500,
                    onStart: () => {
                        this.alien4.anims.play("alien_up", true);
                    }
                },
                {
                    targets: this.alien4,
                    x: this.width / 2 - 50,
                    duration: 1500,
                    onStart: () => {
                        this.alien4.anims.play("alien_right", true);
                    }
                },
                {
                    targets: this.alien4,
                    y: this.height - 50,
                    duration: 1500,
                    onStart: () => {
                        this.alien4.anims.play("alien_down", true);
                    }
                },
                {
                    targets: this.alien4,
                    x: 50,
                    duration: 1500,
                    onStart: () => {
                        this.alien4.anims.play("alien_left", true);
                    }
                }
            ]
        });

        this.timeline2 = this.tweens.timeline({
            
            tweens: [
                {
                    targets: this.alien2,
                    y: this.height / 2 - 50,
                    duration: 1500,
                    onStart: () => {
                        this.alien2.anims.play("alien_down", true);
                    }
                },
                {
                    targets: this.alien2,
                    x: this.width / 2 + 50,
                    duration: 1500,
                    onStart: () => {
                        this.alien2.anims.play("alien_left", true);
                    }
                },
                {
                    targets: this.alien2,
                    y: 50,
                    duration: 1500,
                    onStart: () => {
                        this.alien2.anims.play("alien_up", true);
                    }
                },
                {
                    targets: this.alien2,
                    x: this.width - 50,
                    duration: 1500,
                    onStart: () => {
                        this.alien2.anims.play("alien_right", true);
                    }
                }
            ]
        });
        //tweens(aliens' movements)

        console.log(Phaser.Input.Keyboard.KeyCodes); //types code
        console.log(this.heroe); 

        this.right = this.input.keyboard.addKey(68);
        this.left = this.input.keyboard.addKey(65);
        this.up = this.input.keyboard.addKey(87);
        this.down = this.input.keyboard.addKey(83);

        this.velocityHeroe = 5;

        //physics
        this.physics.add.collider(this.heroe, this.alien1, this.collision, null, this);
        this.physics.add.collider(this.heroe, this.alien2, this.collision, null, this);
        this.physics.add.collider(this.heroe, this.alien3, this.collision, null, this);
        this.physics.add.collider(this.heroe, this.alien4, this.collision, null, this);
        //physics
    }
    update(time, delta) {
        if (this.right.isDown) {
            this.heroe.x += this.velocityHeroe;
            this.heroe.anims.play("walk_right", true);
        } else if (this.left.isDown) {
            this.heroe.x -= this.velocityHeroe;
            this.heroe.anims.play("walk_left", true);
        } else if (this.up.isDown) {
            this.heroe.y -= this.velocityHeroe;
            this.heroe.anims.play("walk_right", true);
        } else if (this.down.isDown) {
            this.heroe.y += this.velocityHeroe;
            this.heroe.anims.play("walk_left", true);
        } else {
            this.heroe.anims.play("idle", true);
        }
    }

    collision() {
        console.log("Hubo contacto");
        this.heroe.setPosition(this.width / 2, this.height / 2);
    }    
}

export default Level1;
