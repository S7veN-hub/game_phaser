class Level2 extends Phaser.Scene {
    constructor() {
        super({
            key: "Level2"
        });
    }

    init(c) {
        this.atlas = c.character;
        this.points = c.points;
    }
    preload() {
        this.load.path = "./assets/";

        this.load.atlas("dog", "dog/dog.png", "dog/dog_atlas.json");
        this.load.atlas("cat", "cat/cat.png", "cat/cat_atlas.json");

        this.load.image("platform", "platform/platform.png");

        this.load.image("ovni", "ovni/ovni.png");

        this.load.image("ball_energy", "lasers/ball_energy.png");
        this.load.image("ball_energy_h", "lasers/ball_energy_h.png");

        this.load.atlas("copper_coins", "copper_coins/copper_coins.png", "copper_coins/copper_coins_atlas.json");
        this.load.atlas("silver_coins", "silver_coins/silver_coins.png", "silver_coins/silver_coins_atlas.json");
        this.load.atlas("gold_coins", "gold_coins/gold_coins.png", "gold_coins/gold_coins_atlas.json");
    }
    create() {
        console.log(this);
        this.width = 800;
        this.height = 600;
        this.cont = 0;
        this.copperCont = 0;
        this.silverCont = 0;
        this.goldCont = 0;

        //points
        this.pointText = this.add.text(10, 10, "POINTS : ", {
            fontFamily: "Georgia",
            color: "#F14294"
        });
        this.pointNumber = this.add.text(90, 10, this.points, {
            fontFamily: "Georgia",
            color: "#F14294",
        });
        //points

        this.physics.world.setBoundsCollision(true, true, true, false);

        this.heroe = this.physics.add.sprite(this.width / 2, this.height / 2 + 50, this.atlas).setScale(0.15);
        this.heroe.setCollideWorldBounds(true);
        this.heroe.body.setGravityY(500);

        this.ovni = this.physics.add.image(this.width / 2, 100, "ovni").setScale(0.25).setImmovable(true);

        this.platform1 = this.physics.add.image(400, 550, "platform").setScale(0.2).setImmovable(true);
        this.platform2 = this.physics.add.image(100, 350, "platform").setScale(0.2).setImmovable(true);
        this.platform3 = this.physics.add.image(this.width - 100, 600, "platform").setScale(0.2).setImmovable(true);
        this.platform4 = this.physics.add.image(this.width / 2, this.height / 2 + 50, "platform").setScale(0.2).setImmovable(true);
        this.platform5 = this.physics.add.image(this.width / 2, this.height / 2 + 50, "platform").setScale(0.2).setImmovable(true);
        
        this.copper1 = this.physics.add.sprite(this.width - 100, 500, "copper_coins").setDepth(-1);
        this.copper2 = this.physics.add.sprite(100, 500, "copper_coins").setDepth(-1);
        this.copper3 = this.physics.add.sprite(this.width - 100, 250, "copper_coins").setDepth(-1);
        this.copper4 = this.physics.add.sprite(100, 250, "copper_coins").setDepth(-1);

        this.events.on("fallen_heroe", () => {
            console.log("Muerto :(");
            this.scene.start("GameOver", this.points);
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
            key: "jump",
            frames: this.anims.generateFrameNames(this.atlas, {
                prefix: "jump_",
                start: 1,
                end: 7
            }),
            repeat: -1,
            frameRate: 20
        });

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
        //animations

        //tweens
        this.tween1 = this.tweens.add({     //platform movements
            targets: this.platform2,
            y: 600,
            duration: 4000,
            yoyo: true,
            repeat: -1
        });
        this.tween2 = this.tweens.add({
            targets: this.platform3,
            y: 350,
            duration: 4000,
            yoyo: true,
            repeat: -1
        });
        this.tween3 = this.tweens.add({
            targets: this.platform4,
            x: 150,
            duration: 3000,
            yoyo: true,
            repeat: -1
        });
        this.tween4 = this.tweens.add({
            targets: this.platform5,
            x: this.width - 150,
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
        this.physics.add.collider(this.heroe, this.copper1, this.copperCatched, null, this);
        this.physics.add.collider(this.heroe, this.copper2, this.copperCatched, null, this);
        this.physics.add.collider(this.heroe, this.copper3, this.copperCatched, null, this);
        this.physics.add.collider(this.heroe, this.copper4, this.copperCatched, null, this);
        //physics
    }
    update(time, delta) {
        this.cont++;
        if (this.cont == 100) {
            this.cont = 0;
            this.load_ball_energy();
        }

        if (this.heroe.y > this.height + 200) {
            this.events.emit("fallen_heroe");
        }

        if (this.copperCont == 4) {
            this.copperCont = 0;
            console.log("All coppers catched");
            this.load_silver_coins();
        }
        if (this.silverCont == 4) {
            this.silverCont = 0;
            console.log("All silvers catched");
            this.load_gold_coins();
        }
        if (this.goldCont == 4) {
            this.goldCont = 0;
            console.log("All gold catched");
            console.log("Ganaste el Nivel 2 ;)");
            this.scene.start("Level2Gained", {character: this.atlas, points: this.points});
        }

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
        }
        if (this.right.isUp && this.left.isUp && this.up.isUp) {
            this.heroe.anims.play("idle", true);
        }
    }

    laserCollision() {
        this.events.emit("fallen_heroe");
    }

    copperCatched(heroe, copper) {
        copper.destroy();
        this.copperCont++;
        this.points += 10;
        this.pointNumber.setText(this.points);
    }
    silverCatched(heroe, silver) {
        silver.destroy();
        this.silverCont++;
        this.points += 10;
        this.pointNumber.setText(this.points);
    }
    goldCatched(heroe, gold) {
        gold.destroy();
        this.goldCont++;
        this.points += 10;
        this.pointNumber.setText(this.points);
    }
    load_silver_coins() {
        this.silver1 = this.physics.add.sprite(this.width / 2 + 100, this.height / 2 + 100, "silver_coins").setDepth(-1);
        this.silver2 = this.physics.add.sprite(this.width / 2 - 100, this.height / 2 + 100, "silver_coins").setDepth(-1);
        this.silver3 = this.physics.add.sprite(this.width / 2 + 100, 250, "silver_coins").setDepth(-1);
        this.silver4 = this.physics.add.sprite(this.width / 2 - 100, 250, "silver_coins").setDepth(-1);

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

        this.physics.add.collider(this.heroe, this.silver1, this.silverCatched, null, this);
        this.physics.add.collider(this.heroe, this.silver2, this.silverCatched, null, this);
        this.physics.add.collider(this.heroe, this.silver3, this.silverCatched, null, this);
        this.physics.add.collider(this.heroe, this.silver4, this.silverCatched, null, this);
    }
    load_gold_coins() {
        this.gold1 = this.physics.add.sprite(this.width / 2 - 200, this.height / 2 - 100, "gold_coins").setDepth(-1);
        this.gold2 = this.physics.add.sprite(this.width / 2 - 100, this.height / 2 - 100, "gold_coins").setDepth(-1);
        this.gold3 = this.physics.add.sprite(this.width / 2 + 100, this.height / 2 - 100, "gold_coins").setDepth(-1);
        this.gold4 = this.physics.add.sprite(this.width / 2 + 200, this.height / 2 - 100, "gold_coins").setDepth(-1);

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

        this.physics.add.collider(this.heroe, this.gold1, this.goldCatched, null, this);
        this.physics.add.collider(this.heroe, this.gold2, this.goldCatched, null, this);
        this.physics.add.collider(this.heroe, this.gold3, this.goldCatched, null, this);
        this.physics.add.collider(this.heroe, this.gold4, this.goldCatched, null, this);
    }
    load_ball_energy() {
        this.ball_energy1 = this.physics.add.image(this.ovni.x, this.ovni.y, "ball_energy").setScale(0.5);
        this.ball_energy1.setGravity(0, 600);
        this.ball_energy2 = this.physics.add.image(this.ovni.x, this.ovni.y, "ball_energy").setScale(0.5);
        this.ball_energy2.setGravity(-300, 600);
        this.ball_energy3 = this.physics.add.image(this.ovni.x, this.ovni.y, "ball_energy").setScale(0.5);
        this.ball_energy3.setGravity(300, 600);

        this.physics.add.collider(this.heroe, this.ball_energy1, this.laserCollision, null, this);
        this.physics.add.collider(this.heroe, this.ball_energy2, this.laserCollision, null, this);
        this.physics.add.collider(this.heroe, this.ball_energy3, this.laserCollision, null, this);
    }
}

export default Level2;