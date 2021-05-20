class Level3 extends Phaser.Scene {
    constructor() {
        super({
            key: "Level3"
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

        this.load.atlas("flying_aliens", "flying_aliens/flying_aliens.png", "flying_aliens/flying_aliens_atlas.json");

        this.load.atlas("gold_coins", "gold_coins/gold_coins.png", "gold_coins/gold_coins_atlas.json");

        this.load.image("platform", "platform/platform.png");
        this.load.image("floor", "floor/floor.png");
    }
    create() {
        console.log(this);
        this.width = 800;
        this.height = 600;
        this.cont_flying_alien1 = 0;
        this.cont_flying_alien2 = 0;
        this.cont_flying_alien3 = 0;
        this.cont_platform = 0;
        this.cont_coin = 0;

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

        this.floor = this.physics.add.image(this.width / 2, this.height / 2 + 300, "floor").setImmovable(true).setDepth(-1);

        this.heroe = this.physics.add.sprite(this.width / 2 - 100, this.height / 2, "dog").setScale(0.15);
        this.heroe.body.setGravityY(500);
        
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
        this.heroe.anims.play("walk_right");
        //animations

        console.log(Phaser.Input.Keyboard.KeyCodes); //types code

        this.space = this.input.keyboard.addKey(32);

        //physics
        this.physics.add.collider(this.heroe, this.floor);
        //physics
    }
    update(time, delta) {
        this.cont_flying_alien1++;
        this.cont_flying_alien2++;
        this.cont_flying_alien3++;
        this.cont_platform++;
        this.cont_coin++;
        if (this.cont_platform == 180) {
            this.cont_platform = 0;
            this.load_platform();
        }
        if (this.cont_flying_alien1 == 200) {
            this.cont_flying_alien1 = 0;
            this.h = Phaser.Math.Between(200, this.height / 2 + 200);
            this.load_flying_alien1(this.h);
        }
        if (this.cont_flying_alien2 == 400) {
            this.cont_flying_alien2 = 0;
            this.h = Phaser.Math.Between(this.height / 2, this.height / 2 + 100);
            this.load_flying_alien2(this.h);
        }
        if (this.cont_flying_alien3 == 600) {
            this.cont_flying_alien3 = 0;
            this.h = Phaser.Math.Between(20, this.height / 2);
            this.load_flying_alien3(this.h);
        }
        if (this.cont_coin == 100) {
            this.cont_coin = 0;
            this.h = Phaser.Math.Between(100, this.height / 2 + 200);
            this.load_coins(this.h);
        }

        if (this.space.isDown && this.heroe.body.touching.down)  {
            this.heroe.setVelocityY(-400);
        }
    }

    alienCollision() {
        console.log("Muerto :(");
        this.scene.start("GameOver", {points: this.points});
    }
    coinCatched(heroe, coin) {
        coin.destroy();
        this.points += 10;
        this.pointNumber.setText(this.points);
    }
    load_coins(h) {
        this.coin = this.physics.add.sprite(this.width + 100, h, "gold_coins").setDepth(-1);

        this.tweens.add({
            targets: this.coin,
            x: -100,
            duration: 10000
        });

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
        this.coin.anims.play("gold");

        this.physics.add.collider(this.heroe, this.coin, this.coinCatched, null, this);
    }
    load_platform() {
        this.platform = this.physics.add.image(this.width + 100, this.height / 2 + 10, "platform").setScale(0.2).setImmovable(true);

        this.tweens.add({
            targets: this.platform,
            x: -100,
            duration: 5000
        });

        this.physics.add.collider(this.heroe, this.platform);
    }
    load_flying_alien1(h) {
        this.flying_alien1 = this.physics.add.sprite(this.width + 100, h, "flying_aliens").setScale(0.3);

        this.tweens.add({
            targets: this.flying_alien1,
            x: -100,
            duration: 4000
        });

        this.anims.create({
            key: "flying_alien1",
            frames: this.anims.generateFrameNames("flying_aliens", {
                prefix: "flying_alien",
                start: 1,
                end: 3
            }),
            repeat: -1,
            frameRate: 10
        });
        this.flying_alien1.anims.play("flying_alien1");

        this.physics.add.collider(this.heroe, this.flying_alien1, this.alienCollision, null, this);
    }
    load_flying_alien2(h) {
        this.flying_alien2 = this.physics.add.sprite(this.width + 100, h, "flying_aliens").setScale(0.3);

        this.tweens.add({
            targets: this.flying_alien2,
            x: -100,
            duration: 6000
        });

        this.anims.create({
            key: "flying_alien2",
            frames: this.anims.generateFrameNames("flying_aliens", {
                prefix: "flying_alien",
                start: 4,
                end: 6
            }),
            repeat: -1,
            frameRate: 5
        });
        this.flying_alien2.anims.play("flying_alien2");

        this.physics.add.collider(this.heroe, this.flying_alien2, this.alienCollision, null, this);
    }
    load_flying_alien3(h) {
        this.flying_alien3 = this.physics.add.sprite(this.width + 100, h, "flying_aliens").setScale(0.3);

        this.tweens.add({
            targets: this.flying_alien3,
            x: -100,
            duration: 9000
        });

        this.anims.create({
            key: "flying_alien3",
            frames: this.anims.generateFrameNames("flying_aliens", {
                prefix: "flying_alien",
                start: 7,
                end: 9
            }),
            repeat: -1,
            frameRate: 1
        });
        this.flying_alien3.anims.play("flying_alien3");

        this.physics.add.collider(this.heroe, this.flying_alien3, this.alienCollision, null, this);
    }
}

export default Level3;