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

        this.load.image("floor", "floor/floor.png");
    }
    create() {
        console.log(this);
        this.atlas = "dog";
        this.width = 800;
        this.height = 600;

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
        if (this.space.isDown && this.heroe.body.touching.down)  {
            this.heroe.setVelocityY(-400);
        }
    }
}

export default Level3;