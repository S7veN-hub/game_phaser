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
        this.tween1 = this.tweens.add({
            targets: this.alien1,
            paused: true,
            x: this.width / 2 - 50,
            duration: 1500,
            onComplete: () => {
                this.tween2.play();
            }
        });
        this.tween1.play();
        this.tween2 = this.tweens.add({
            targets: this.alien1,
            paused: true,
            y: this.height / 2 - 50,
            duration: 1500,
            onComplete: () => {
                this.tween3.play();
            }
        });
        this.tween3 = this.tweens.add({
            targets: this.alien1,
            paused: true,
            x: 50,
            duration: 1500,
            onComplete: () => {
                this.tween4.play();
            }
        });
        this.tween4 = this.tweens.add({
            targets: this.alien1,
            paused: true,
            y: 50,
            duration: 1500,
            onComplete: () => {
                this.tween1.play();
            }
        });

        this.tween5 = this.tweens.add({
            targets: this.alien2,
            paused: true,
            y: this.height / 2 -50,
            duration: 1500,
            onComplete: () => {
                this.tween6.play();
            }
        });
        this.tween5.play();
        this.tween6 = this.tweens.add({
            targets: this.alien2,
            paused: true,
            x: this.width / 2 + 50,
            duration: 1500,
            onComplete: () => {
                this.tween7.play();
            }
        });
        this.tween7 = this.tweens.add({
            targets: this.alien2,
            paused: true,
            y: 50,
            duration: 1500,
            onComplete: () => {
                this.tween8.play();
            }
        });
        this.tween8 = this.tweens.add({
            targets: this.alien2,
            paused: true,
            x: this.width - 50,
            duration: 1500,
            onComplete: () => {
                this.tween5.play();
            }
        });

        this.tween9 = this.tweens.add({
            targets: this.alien3,
            paused: true,
            x: this.width / 2 + 50,
            duration: 1500,
            onComplete: () => {
                this.tween10.play();
            }
        });
        this.tween9.play();
        this.tween10 = this.tweens.add({
            targets: this.alien3,
            paused: true,
            y: this.height / 2 + 50,
            duration: 1500,
            onComplete: () => {
                this.tween11.play();
            }
        });
        this.tween11 = this.tweens.add({
            targets: this.alien3,
            paused: true,
            x: this.width - 50,
            duration: 1500,
            onComplete: () => {
                this.tween12.play();
            }
        });
        this.tween12 = this.tweens.add({
            targets: this.alien3,
            paused: true,
            y: this.height - 50,
            duration: 1500,
            onComplete: () => {
                this.tween9.play();
            }
        });

        this.tween13 = this.tweens.add({
            targets: this.alien4,
            paused: true,
            y: this.height / 2 + 50,
            duration: 1500,
            onComplete: () => {
                this.tween14.play();
            }
        });
        this.tween13.play();
        this.tween14 = this.tweens.add({
            targets: this.alien4,
            paused: true,
            x: this.width / 2 - 50,
            duration: 1500,
            onComplete: () => {
                this.tween15.play();
            }
        });
        this.tween15 = this.tweens.add({
            targets: this.alien4,
            paused: true,
            y: this.height - 50,
            duration: 1500,
            onComplete: () => {
                this.tween16.play();
            }
        });
        this.tween16 = this.tweens.add({
            targets: this.alien4,
            paused: true,
            x: 50,
            duration: 1500,
            onComplete: () => {
                this.tween13.play();
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
    }

    collision() {
        console.log("Hubo contacto");
        this.heroe.setPosition(this.width / 2, this.height / 2);
    }    
}

export default Level1;
