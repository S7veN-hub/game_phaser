class Level1 extends Phaser.Scene {
    constructor() {
        super({key: "Level 1", active: true});
    }

    create() {
        //this.heroe = this.add.sprite(400, 300, "dog");
        console.log("Level1");
        this.add.image(400, 300, "alien");
        /*this.anims.create({
            key: "walk_right",
            frames: this.anims.generateFrameNames("dog", {
                prefix: "run_r_",
                suffix: ".png",
                start: 1,
                end: 7
            }),
            repeat: -1,
            frameRate: 10
        });
        this.anims.create({
            key: "walk_left",
            frames: this.anims.generateFrameNames("dog", {
                prefix: "runs_",
                suffix: ".png",
                start: 1,
                end: 7
            }),
            repeat: -1,
            frameRate: 10
        });*/
    }
}

export default Level1;