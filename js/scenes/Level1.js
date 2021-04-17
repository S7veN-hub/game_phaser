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
        console.log("Create-Level1");
        this.heroe = this.add.sprite(400, 300, "dog").setScale(0.15);

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
            frameRate: 10
        });
        //animations

        this.heroe.anims.play("idle");
    }
}

export default Level1;
