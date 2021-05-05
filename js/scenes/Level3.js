class Level3 extends Phaser.Scene {
    constructor() {
        super({
            key: "Level3"
        });
    }

    preload() {
        this.load.path = "./assets/";

        this.load.atlas("dog", "dog/dog.png", "dog/dog_atlas.json");
        this.load.atlas("cat", "cat/cat.png", "cat/cat_atlas.json");

        this.load.atlas("flying_aliens", "flying_aliens/flying_aliens.png", "flying_aliens/flying_aliens_atlas.json");

        this.load.image("platform", "platform/platform.png");
        this.load.image("floor", "floor/floor.png");
    }
    create() {
        console.log(this);
        this.atlas = "dog";
        this.width = 800;
        this.height = 600;
        this.cont_flying_alien1 = 0;
        this.cont_flying_alien2 = 0;
        this.cont_flying_alien3 = 0;
        this.cont_platform = 0;

        this.floor = this.physics.add.image(this.width / 2, this.height / 2 + 300, "floor").setImmovable(true).setDepth(-1);

        this.heroe = this.physics.add.sprite(this.width / 2 - 100, this.height / 2, "dog").setScale(0.15);
        this.heroe.body.setGravityY(500);
        
        this.events.on("load_platform", () => {
            this.platform = this.physics.add.image(this.width + 100, this.height / 2 + 10, "platform").setScale(0.2).setImmovable(true);

            this.tweens.add({
                targets: this.platform,
                x: -100,
                duration: 5000,
            });

            this.physics.add.collider(this.heroe, this.platform);
        });
        this.events.on("load_flying_alien1", (h) => {
            this.flying_alien1 = this.physics.add.sprite(this.width + 100, h, "flying_aliens").setScale(0.3);

            this.tweens.add({
                targets: this.flying_alien1,
                x: -100,
                duration: 4000,
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
        });
        this.events.on("load_flying_alien2", (h) => {
            this.flying_alien2 = this.physics.add.sprite(this.width + 100, h, "flying_aliens").setScale(0.3);
            console.log(h)
            this.tweens.add({
                targets: this.flying_alien2,
                x: -100,
                duration: 6000,
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
        this.cont_platform++;
        if (this.cont_platform == 180) {
            this.cont_platform = 0;
            this.events.emit("load_platform");
        }
        if (this.cont_flying_alien1 == 200) {
            this.cont_flying_alien1 = 0;
            this.h = Phaser.Math.Between(200, this.height / 2 + 200);
            this.events.emit("load_flying_alien1", this.h);
        }
        if (this.cont_flying_alien2 == 400) {
            this.cont_flying_alien2 = 0;
            this.h = Phaser.Math.Between(this.height / 2, this.height / 2 + 100);
            this.events.emit("load_flying_alien2", this.h);
        }

        if (this.space.isDown && this.heroe.body.touching.down)  {
            this.heroe.setVelocityY(-400);
        }
    }

    alienCollision() {
        console.log("Muerto :(");
        this.scene.pause("Level3");
    }
}

export default Level3;