class Level1 extends Phaser.Scene {
    constructor() {
        super({key: "Level 1"});
    }

    preload() {
        this.load.path = "./assets/";
        this.load.atlas("dog", "dog/dog.png", "dog/dog_atlas.json");
        this.load.atlas("cat", "cat/cat.png", "cat/cat_atlas.json");
    }
    create() {
        this.heroe = this.physics.add.sprite(400, 300, "dog").setScale(0.15);
        this.heroe.setCollideWorldBounds(true);

        //animations
        this.anims.create({
            key: "walk_right",
            frames: this.anims.generateFrameNames("dog", {
                prefix: "run_r_",
                start: 1,
                end: 7
            }),
            repeat: -1,
            frameRate: 10
        });
        this.anims.create({
            key: "walk_left",
            frames: this.anims.generateFrameNames("dog", {
                prefix: "run_",
                start: 1,
                end: 7
            }),
            repeat: -1,
            frameRate: 10
        });
        this.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNames("dog", {
                prefix: "idle_",
                start: 1,
                end: 9
            }),
            repeat: -1,
            frameRate: 20
        });
        //animations

        console.log(Phaser.Input.Keyboard.KeyCodes); //types code
        console.log(this.heroe); 

        this.right = this.input.keyboard.addKey(68);
        this.left = this.input.keyboard.addKey(65);
        this.up = this.input.keyboard.addKey(87);
        this.down = this.input.keyboard.addKey(83);

        this.velocityHeroe = 5;
    }
    update(time, delta) {
        if (this.right.isDown) {
            this.heroe.x += this.velocityHeroe;
            this.heroe.anims.play("walk_right", true);
        } else if (this.left.isDown) {
            this.heroe.body.x -= this.velocityHeroe;
            this.heroe.anims.play("walk_left", true);
        } else if (this.up.isDown) {
            this.heroe.body.y -= this.velocityHeroe;
            this.heroe.anims.play("walk_right", true);
        } else if (this.down.isDown) {
            this.heroe.body.y += this.velocityHeroe;
            this.heroe.anims.play("walk_left", true);
        } else {
            this.heroe.anims.play("idle", true);
        }
    }
}

export default Level1;
