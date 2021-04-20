class Level1 extends Phaser.Scene {
    constructor() {
        super({
            key: "Level1"
        });
    }

    preload() {
        this.load.path = "./assets/";

        this.load.atlas("dog", "dog/dog.png", "dog/dog_atlas.json");
        this.load.atlas("cat", "cat/cat.png", "cat/cat_atlas.json");

        this.load.atlas("aliens", "aliens/aliens.png", "aliens/aliens_atlas.json");

        this.load.atlas("copper_coins", "copper_coins/copper_coins.png", "copper_coins/copper_coins_atlas.json");
        this.load.atlas("silver_coins", "silver_coins/silver_coins.png", "silver_coins/silver_coins_atlas.json");
        this.load.atlas("gold_coins", "gold_coins/gold_coins.png", "gold_coins/gold_coins_atlas.json");

        this.load.image("red_laser", "lasers/red_laser.png");
    }
    create() {
        console.log(this);
        this.atlas = "dog";
        this.width = 800;
        this.height = 600;
        this.cont = 0;
        this.copperCont = 0;
        this.silverCont = 0;
        this.goldCont = 0;

        this.heroe = this.physics.add.sprite(400, 300, "dog").setScale(0.15);
        this.heroe.setCollideWorldBounds(true);

        this.alien1 = this.physics.add.sprite(50, 50, "aliens").setScale(1.5);
        this.alien2 = this.physics.add.sprite(this.width - 50, 50, "aliens").setScale(1.5);
        this.alien3 = this.physics.add.sprite(this.width - 50, this.height - 50, "aliens").setScale(1.5);
        this.alien4 = this.physics.add.sprite(50, this.height - 50, "aliens").setScale(1.5);

        this.alien5 = this.physics.add.sprite(this.width - 150, 150, "aliens").setScale(1.5);
        this.alien6 = this.physics.add.sprite(150, this.height - 150, "aliens").setScale(1.5);

        this.alien7 = this.physics.add.sprite(this.width / 2, 50, "aliens").setScale(1.5);
        this.alien8 = this.physics.add.sprite(this.width / 2, this.height - 50, "aliens").setScale(1.5);

        this.copper1 = this.physics.add.sprite(50, 50, "copper_coins").setDepth(-1);
        this.copper2 = this.physics.add.sprite(this.width - 50, 50, "copper_coins").setDepth(-1);
        this.copper3 = this.physics.add.sprite(this.width - 50, this.height - 50, "copper_coins").setDepth(-1);
        this.copper4 = this.physics.add.sprite(50, this.height - 50, "copper_coins").setDepth(-1);
        this.copper5 = this.physics.add.sprite(150, 150, "copper_coins").setDepth(-1);
        this.copper6 = this.physics.add.sprite(this.width - 150, 150, "copper_coins").setDepth(-1);
        this.copper7 = this.physics.add.sprite(this.width - 150, this.height - 150, "copper_coins").setDepth(-1);
        this.copper8 = this.physics.add.sprite(150, this.height - 150, "copper_coins").setDepth(-1);

        this.events.on("load_red_laser1", () => {
            this.red_laser1 = this.physics.add.image(this.alien7.x, this.alien7.y, "red_laser").setDepth(2);
            this.red_laser1.setVelocityY(200);
            this.red_laser2 = this.physics.add.image(this.alien8.x, this.alien8.y, "red_laser").setDepth(2);
            this.red_laser2.setVelocityY(-200);

            this.physics.add.collider(this.heroe, this.red_laser1, this.redLaserCollision, null, this);
            this.physics.add.collider(this.heroe, this.red_laser2, this.redLaserCollision, null, this);
        });

        this.events.on("load_silver_coins", () => {
            this.silver1 = this.physics.add.sprite(300, 150, "silver_coins").setDepth(-1);
            this.silver2 = this.physics.add.sprite(this.width - 300, 150, "silver_coins").setDepth(-1);
            this.silver3 = this.physics.add.sprite(this.width - 300, this.height - 150, "silver_coins").setDepth(-1);
            this.silver4 = this.physics.add.sprite(300, this.height - 150, "silver_coins").setDepth(-1);
            this.silver5 = this.physics.add.sprite(50, this.height / 2, "silver_coins").setDepth(-1);
            this.silver6 = this.physics.add.sprite(300, this.height / 2, "silver_coins").setDepth(-1);
            this.silver7 = this.physics.add.sprite(this.width - 300, this.height / 2, "silver_coins").setDepth(-1);
            this.silver8 = this.physics.add.sprite(this.width - 50, this.height / 2, "silver_coins").setDepth(-1);

            this.physics.add.collider(this.heroe, this.silver1, this.silverCatched, null, this);
            this.physics.add.collider(this.heroe, this.silver2, this.silverCatched, null, this);
            this.physics.add.collider(this.heroe, this.silver3, this.silverCatched, null, this);
            this.physics.add.collider(this.heroe, this.silver4, this.silverCatched, null, this);
            this.physics.add.collider(this.heroe, this.silver5, this.silverCatched, null, this);
            this.physics.add.collider(this.heroe, this.silver6, this.silverCatched, null, this);
            this.physics.add.collider(this.heroe, this.silver7, this.silverCatched, null, this);
            this.physics.add.collider(this.heroe, this.silver8, this.silverCatched, null, this);

            this.anims.create({       //silver coins animation
                key: "silver",
                frames: this.anims.generateFrameNames("silver_coins", {
                    prefix: "silver_",
                    start: 0,
                    end: 7
                }),
                repeat: -1,
                frameRate: 10
            });
            this.silver1.anims.play("silver");
            this.silver2.anims.play("silver");
            this.silver3.anims.play("silver");
            this.silver4.anims.play("silver");
            this.silver5.anims.play("silver");
            this.silver6.anims.play("silver");
            this.silver7.anims.play("silver");
            this.silver8.anims.play("silver");
        });

        this.events.on("load_gold_coins", () => {
            this.gold1 = this.physics.add.sprite(250, 150, "gold_coins");
            this.gold2 = this.physics.add.sprite(this.width - 250, 150, "gold_coins");
            this.gold3 = this.physics.add.sprite(this.width - 250, this.height - 150, "gold_coins");
            this.gold4 = this.physics.add.sprite(250, this.height - 150, "gold_coins");
            this.gold5 = this.physics.add.sprite(150, this.height / 2, "gold_coins");
            this.gold6 = this.physics.add.sprite(this.width - 150, this.height / 2, "gold_coins");
            this.gold7 = this.physics.add.sprite(this.width / 2, this.height / 2 - 90, "gold_coins");
            this.gold8 = this.physics.add.sprite(this.width / 2, this.height / 2 + 90, "gold_coins");

            this.physics.add.collider(this.heroe, this.gold1, this.goldCatched, null, this);
            this.physics.add.collider(this.heroe, this.gold2, this.goldCatched, null, this);
            this.physics.add.collider(this.heroe, this.gold3, this.goldCatched, null, this);
            this.physics.add.collider(this.heroe, this.gold4, this.goldCatched, null, this);
            this.physics.add.collider(this.heroe, this.gold5, this.goldCatched, null, this);
            this.physics.add.collider(this.heroe, this.gold6, this.goldCatched, null, this);
            this.physics.add.collider(this.heroe, this.gold7, this.goldCatched, null, this);
            this.physics.add.collider(this.heroe, this.gold8, this.goldCatched, null, this);

            this.anims.create({       //gold coins animation
                key: "gold",
                frames: this.anims.generateFrameNames("gold_coins", {
                    prefix: "gold_",
                    start: 0,
                    end: 7
                }),
                repeat: -1,
                frameRate: 10
            });
            this.gold1.anims.play("gold");
            this.gold2.anims.play("gold");
            this.gold3.anims.play("gold");
            this.gold4.anims.play("gold");
            this.gold5.anims.play("gold");
            this.gold6.anims.play("gold");
            this.gold7.anims.play("gold");
            this.gold8.anims.play("gold");
        });
        
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
        this.anims.create({
            key: "dead",
            frames: this.anims.generateFrameNames(this.atlas, {
                prefix: "dead_r_",
                start: 0,
                end: 3
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
        

        this.anims.create({         //aliens animations 2
            key: "alien2_down",
            frames: this.anims.generateFrameNames("aliens", {
                prefix: "aliens_",
                start: 51,
                end: 53
            }),
            repeat: -1,
            frameRate: 15
        });
        this.anims.create({
            key: "alien2_left",
            frames: this.anims.generateFrameNames("aliens", {
                prefix: "aliens_",
                start: 63,
                end: 65
            }),
            repeat: -1,
            frameRate: 15
        });
        this.anims.create({
            key: "alien2_right",
            frames: this.anims.generateFrameNames("aliens", {
                prefix: "aliens_",
                start: 75,
                end: 77
            }),
            repeat: -1,
            frameRate: 15
        });
        this.anims.create({       
            key: "alien2_up",
            frames: this.anims.generateFrameNames("aliens", {
                prefix: "aliens_",
                start: 87,
                end: 89
            }),
            repeat: -1,
            frameRate: 15
        });

        this.anims.create({       //aliens animations 3
            key: "alien3_down",
            frames: this.anims.generateFrameNames("aliens", {
                prefix: "aliens_",
                start: 9,
                end: 11
            }),
            repeat: -1,
            frameRate: 10
        });
        this.anims.create({       
            key: "alien3_up",
            frames: this.anims.generateFrameNames("aliens", {
                prefix: "aliens_",
                start: 45,
                end: 47
            }),
            repeat: -1,
            frameRate: 10
        });
        this.alien7.anims.play("alien3_down");
        this.alien8.anims.play("alien3_up");

        this.anims.create({       //copper coins animation
            key: "copper",
            frames: this.anims.generateFrameNames("copper_coins", {
                prefix: "copper_",
                start: 0,
                end: 7
            }),
            repeat: -1,
            frameRate: 10
        });
        this.copper1.anims.play("copper");
        this.copper2.anims.play("copper");
        this.copper3.anims.play("copper");
        this.copper4.anims.play("copper");
        this.copper5.anims.play("copper");
        this.copper6.anims.play("copper");
        this.copper7.anims.play("copper");
        this.copper8.anims.play("copper");
        //animations

        //tweens(aliens' movements)
        this.tween1 = this.tweens.add({
            targets: this.alien1,
            paused: true,
            x: this.width / 2 - 50,
            duration: 1200,
            onComplete: () => {
                this.tween2.play();
            }
        });
        this.tween1.play();
        this.tween2 = this.tweens.add({
            targets: this.alien1,
            paused: true,
            y: this.height / 2 - 50,
            duration: 1200,
            onComplete: () => {
                this.tween3.play();
            }
        });
        this.tween3 = this.tweens.add({
            targets: this.alien1,
            paused: true,
            x: 50,
            duration: 1200,
            onComplete: () => {
                this.tween4.play();
            }
        });
        this.tween4 = this.tweens.add({
            targets: this.alien1,
            paused: true,
            y: 50,
            duration: 1200,
            onComplete: () => {
                this.tween1.play();
            }
        });

        this.tween5 = this.tweens.add({
            targets: this.alien2,
            paused: true,
            y: this.height / 2 -50,
            duration: 1200,
            onComplete: () => {
                this.tween6.play();
            }
        });
        this.tween5.play();
        this.tween6 = this.tweens.add({
            targets: this.alien2,
            paused: true,
            x: this.width / 2 + 50,
            duration: 1200,
            onComplete: () => {
                this.tween7.play();
            }
        });
        this.tween7 = this.tweens.add({
            targets: this.alien2,
            paused: true,
            y: 50,
            duration: 1200,
            onComplete: () => {
                this.tween8.play();
            }
        });
        this.tween8 = this.tweens.add({
            targets: this.alien2,
            paused: true,
            x: this.width - 50,
            duration: 1200,
            onComplete: () => {
                this.tween5.play();
            }
        });

        this.tween9 = this.tweens.add({
            targets: this.alien3,
            paused: true,
            x: this.width / 2 + 50,
            duration: 1200,
            onComplete: () => {
                this.tween10.play();
            }
        });
        this.tween9.play();
        this.tween10 = this.tweens.add({
            targets: this.alien3,
            paused: true,
            y: this.height / 2 + 50,
            duration: 1200,
            onComplete: () => {
                this.tween11.play();
            }
        });
        this.tween11 = this.tweens.add({
            targets: this.alien3,
            paused: true,
            x: this.width - 50,
            duration: 1200,
            onComplete: () => {
                this.tween12.play();
            }
        });
        this.tween12 = this.tweens.add({
            targets: this.alien3,
            paused: true,
            y: this.height - 50,
            duration: 1200,
            onComplete: () => {
                this.tween9.play();
            }
        });

        this.tween13 = this.tweens.add({
            targets: this.alien4,
            paused: true,
            y: this.height / 2 + 50,
            duration: 1200,
            onComplete: () => {
                this.tween14.play();
            }
        });
        this.tween13.play();
        this.tween14 = this.tweens.add({
            targets: this.alien4,
            paused: true,
            x: this.width / 2 - 50,
            duration: 1200,
            onComplete: () => {
                this.tween15.play();
            }
        });
        this.tween15 = this.tweens.add({
            targets: this.alien4,
            paused: true,
            y: this.height - 50,
            duration: 1200,
            onComplete: () => {
                this.tween16.play();
            }
        });
        this.tween16 = this.tweens.add({
            targets: this.alien4,
            paused: true,
            x: 50,
            duration: 1200,
            onComplete: () => {
                this.tween13.play();
            }
        });

        this.tween17 = this.tweens.add({
            targets: this.alien5,
            paused: true,
            x: 150,
            duration: 1600,
            onComplete: () => {
                this.tween18.play();
            }
        });
        this.tween17.play();
        this.tween18 = this.tweens.add({
            targets: this.alien5,
            paused: true,
            duration: 1600,
            y: this.height - 150,
            onComplete: () => {
                this.tween19.play();
            }
        });
        this.tween19 = this.tweens.add({
            targets: this.alien5,
            paused: true,
            x: this.width - 150,
            duration: 1600,
            onComplete: () => {
                this.tween20.play();
            }
        });
        this.tween20 = this.tweens.add({
            targets: this.alien5,
            paused: true,
            y: 150,
            duration: 1600,
            onComplete: () => {
                this.tween17.play();
            }
        });

        this.tween21 = this.tweens.add({
            targets: this.alien6,
            paused: true,
            x: this.width - 150,
            duration: 1600,
            onComplete: () => {
                this.tween22.play();
            }
        });
        this.tween21.play();
        this.tween22 = this.tweens.add({
            targets: this.alien6,
            paused: true,
            duration: 1600,
            y: 150,
            onComplete: () => {
                this.tween23.play();
            }
        });
        this.tween23 = this.tweens.add({
            targets: this.alien6,
            paused: true,
            x: 150,
            duration: 1600,
            onComplete: () => {
                this.tween24.play();
            }
        });
        this.tween24 = this.tweens.add({
            targets: this.alien6,
            paused: true,
            y: this.height - 150,
            duration: 1600,
            onComplete: () => {
                this.tween21.play();
            }
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
        this.physics.add.collider(this.heroe, this.alien1, this.alienCollision, null, this);
        this.physics.add.collider(this.heroe, this.alien2, this.alienCollision, null, this);
        this.physics.add.collider(this.heroe, this.alien3, this.alienCollision, null, this);
        this.physics.add.collider(this.heroe, this.alien4, this.alienCollision, null, this);
        this.physics.add.collider(this.heroe, this.alien5, this.alienCollision, null, this);
        this.physics.add.collider(this.heroe, this.alien6, this.alienCollision, null, this);
        this.physics.add.collider(this.heroe, this.alien7, this.alienCollision, null, this);
        this.physics.add.collider(this.heroe, this.alien8, this.alienCollision, null, this);
        this.physics.add.collider(this.heroe, this.copper1, this.copperCatched, null, this);
        this.physics.add.collider(this.heroe, this.copper2, this.copperCatched, null, this);
        this.physics.add.collider(this.heroe, this.copper3, this.copperCatched, null, this);
        this.physics.add.collider(this.heroe, this.copper4, this.copperCatched, null, this);
        this.physics.add.collider(this.heroe, this.copper5, this.copperCatched, null, this);
        this.physics.add.collider(this.heroe, this.copper6, this.copperCatched, null, this);
        this.physics.add.collider(this.heroe, this.copper7, this.copperCatched, null, this);
        this.physics.add.collider(this.heroe, this.copper8, this.copperCatched, null, this);
        //physics
    }
    update(time, delta) {
        this.cont++;
        if (this.cont == 200) {
            this.cont = 0;
            this.events.emit("load_red_laser1");
        }

        if (this.copperCont == 8) {
            this.copperCont = 0;
            console.log("All coppers catched");
            this.events.emit("load_silver_coins");
        }
        if (this.silverCont == 8) {
            this.silverCont = 0;
            console.log("All silvers catched");
            this.events.emit("load_gold_coins");
        }
        if (this.goldCont == 8) {
            this.goldCont = 0;
            console.log("All gold catched");
            console.log("Ganaste ;)");
            this.scene.pause("Level1");
        }

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

        if (this.tween1.isPlaying()) {
            this.alien1.anims.play("alien_right", true);
        } else if (this.tween2.isPlaying()) {
            this.alien1.anims.play("alien_down", true);
        } else if (this.tween3.isPlaying()) {
            this.alien1.anims.play("alien_left", true);
        } else if (this.tween4.isPlaying()) {
            this.alien1.anims.play("alien_up", true);
        }

        if (this.tween5.isPlaying()) {
            this.alien2.anims.play("alien_down", true);
        } else if (this.tween6.isPlaying()) {
            this.alien2.anims.play("alien_left", true);
        } else if (this.tween7.isPlaying()) {
            this.alien2.anims.play("alien_up", true);
        } else if (this.tween8.isPlaying()) {
            this.alien2.anims.play("alien_right", true);
        }

        if (this.tween9.isPlaying()) {
            this.alien3.anims.play("alien_left", true);
        } else if (this.tween10.isPlaying()) {
            this.alien3.anims.play("alien_up", true);
        } else if (this.tween11.isPlaying()) {
            this.alien3.anims.play("alien_right", true);
        } else if (this.tween12.isPlaying()) {
            this.alien3.anims.play("alien_down", true);
        }

        if (this.tween13.isPlaying()) {
            this.alien4.anims.play("alien_up", true);
        } else if (this.tween14.isPlaying()) {
            this.alien4.anims.play("alien_right", true);
        } else if (this.tween15.isPlaying()) {
            this.alien4.anims.play("alien_down", true);
        } else if (this.tween16.isPlaying()) {
            this.alien4.anims.play("alien_left", true);
        }

        if (this.tween17.isPlaying()) {
            this.alien5.anims.play("alien2_left", true);
        } else if (this.tween18.isPlaying()) {
            this.alien5.anims.play("alien2_down", true);
        } else if (this.tween19.isPlaying()) {
            this.alien5.anims.play("alien2_right", true);
        } else if (this.tween20.isPlaying()) {
            this.alien5.anims.play("alien2_up", true);
        }

        if (this.tween21.isPlaying()) {
            this.alien6.anims.play("alien2_right", true);
        } else if (this.tween22.isPlaying()) {
            this.alien6.anims.play("alien2_up", true);
        } else if (this.tween23.isPlaying()) {
            this.alien6.anims.play("alien2_left", true);
        } else if (this.tween24.isPlaying()) {
            this.alien6.anims.play("alien2_down", true);
        }
    }

    alienCollision() {
        console.log("Colision con alien");
        this.heroe.setPosition(this.width / 2, this.height / 2);
    }    
    redLaserCollision() {
        console.log("Muerto :(");
        this.scene.pause("Level1");
    }
    copperCatched(heroe, copper) {
        copper.destroy();
        this.copperCont++;
    }
    silverCatched(heroe, silver) {
        silver.destroy();
        this.silverCont++;
    }
    goldCatched(heroe, gold) {
        gold.destroy();
        this.goldCont++;
    }
}

export default Level1;
