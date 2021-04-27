class Level2 extends Phaser.Scene {
    constructor() {
        super({
            key: "Level2"
        });
    }

    preload() {
        this.load.path = "./assets/";

        this.load.atlas("dog", "dog/dog.png", "dog/dog_atlas.json");
        this.load.atlas("cat", "cat/cat.png", "cat/cat_atlas.json");

        this.load.image("platform", "platform/platform.png");

        this.load.image("ovni", "ovni/ovni.png");
    }
    create() {
        console.log(this);
        this.atlas = "dog";
        this.width = 800;
        this.height = 600;

        this.physics.world.setBoundsCollision(true, true, true, false);

        this.heroe = this.physics.add.sprite(this.width / 2, this.height / 2 + 50, "dog").setScale(0.15);
        this.heroe.setCollideWorldBounds(true);
        this.heroe.body.setGravityY(500);

        this.ovni = this.physics.add.image(this.width / 2, 100, "ovni").setScale(0.25).setImmovable(true);

        this.platform1 = this.physics.add.image(400, 550, "platform").setScale(0.2).setImmovable(true);
        this.platform2 = this.physics.add.image(100, 350, "platform").setScale(0.2).setImmovable(true);
        this.platform3 = this.physics.add.image(this.width - 100, 600, "platform").setScale(0.2).setImmovable(true);
        this.platform4 = this.physics.add.image(this.width / 2, this.height / 2 + 50, "platform").setScale(0.2).setImmovable(true);
        this.platform5 = this.physics.add.image(this.width / 2, this.height / 2 + 50, "platform").setScale(0.2).setImmovable(true);

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
            key: "jump",
            frames: this.anims.generateFrameNames(this.atlas, {
                prefix: "jump_",
                start: 1,
                end: 7
            }),
            repeat: -1,
            frameRate: 20
        });
        //animations

        //tweens
        this.tween1 = this.tweens.add({     //platform movements
            targets: this.platform2,
            y: 600,
            duration: 2000,
            yoyo: true,
            repeat: -1
        });
        this.tween2 = this.tweens.add({
            targets: this.platform3,
            y: 350,
            duration: 2000,
            yoyo: true,
            repeat: -1
        });
        this.tween3 = this.tweens.add({
            targets: this.platform4,
            x: 100,
            duration: 3000,
            yoyo: true,
            repeat: -1
        });
        this.tween4 = this.tweens.add({
            targets: this.platform5,
            x: this.width - 100,
            duration: 3000,
            yoyo: true,
            repeat: -1
        });

        this.tween5 = this.tweens.add({       //ovni movements
            targets: this.ovni,
            paused: true,
            x: this.width + 200,
            duration: 2000,
            onComplete: () => {
                this.tween6.play();
            }
        });
        this.tween5.play();
        this.tween6 = this.tweens.add({
            targets: this.ovni,
            paused: true,
            x: this.width / 2,
            duration: 2000,
            onComplete: () => {
                this.tween7.play();
            }
        });
        this.tween7 = this.tweens.add({
            targets: this.ovni,
            paused: true,
            x: -200,
            duration: 2000,
            onComplete: () => {
                this.tween8.play();
            }
        });
        this.tween8 = this.tweens.add({
            targets: this.ovni,
            paused: true,
            x: this.width / 2,
            duration: 2000,
            onComplete: () => {
                this.tween5.play();
            }
        });
        //tweens
        
        console.log(Phaser.Input.Keyboard.KeyCodes); //types code

        this.right = this.input.keyboard.addKey(68);
        this.left = this.input.keyboard.addKey(65);
        this.up = this.input.keyboard.addKey(87);
        this.down = this.input.keyboard.addKey(83);

        //physics
        this.physics.add.collider(this.heroe, this.platform1);
        this.physics.add.collider(this.heroe, this.platform2);
        this.physics.add.collider(this.heroe, this.platform3);
        this.physics.add.collider(this.heroe, this.platform4);
        this.physics.add.collider(this.heroe, this.platform5);
        this.physics.add.collider(this.heroe, this.ovni);
        //physics
    }
    update(time, delta) {
        if (this.right.isDown) {
            this.heroe.x += 3;
            this.heroe.anims.play("walk_right", true);
        }
        if (this.left.isDown) {
            this.heroe.x -= 3;
            this.heroe.anims.play("walk_left", true);
        }
        if (this.up.isDown && this.heroe.body.touching.down) {
            this.heroe.setVelocityY(-350);
            this.heroe.anims.play("jump", true);
        }
        if (this.down.isDown) {
            this.heroe.y += 0;
            // this.heroe.anims.play("walk_left", true);
        }
        if (this.right.isUp && this.left.isUp && this.up.isUp) {
            this.heroe.anims.play("idle", true);
        }
    }
}

export default Level2;