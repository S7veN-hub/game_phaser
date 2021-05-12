class Level2Gained extends Phaser.Scene {
    constructor() {
        super({
            key: "Level2Gained"
        });
    }

    init(c) {
        this.data = c;
    }
    preload() {
        this.load.path = "./assets/";

        this.load.atlas("dog", "dog/dog.png", "dog/dog_atlas.json");
        this.load.atlas("cat", "cat/cat.png", "cat/cat_atlas.json");
    }
    create() {
        console.log(this);
        this.width = 800;
        this.height = 600;

        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0xE4D2AE);

        this.graphics.fillRect(0, 0, this.width, this.height);

        this.heroe = this.physics.add.sprite(this.width / 2, this.height / 2 - 50, "dog").setScale(0.7);
        this.add.text(this.width / 2 - 200, this.height / 2 + 100, "YOU PASSED LEVEL 2 !!", {
            fontFamily: "Georgia",
            color: "#91763F",
            fontSize: 40
        });
        this.add.text(this.width / 2 + 50, this.height - 80, "SPACE : CONTINUE", {
            fontFamily: "Georgia",
            color: "#fff",
            fontSize: 30
        });

        console.log(Phaser.Input.Keyboard.KeyCodes); //types code

        this.space = this.input.keyboard.addKey(32);

        //animations
        this.anims.create({
            key: "jumping",
            frames: this.anims.generateFrameNames("dog", {
                prefix: "jump_",
                start: 0,
                end: 6
            }),
            repeat: -1,
            frameRate: 10
        });
        this.heroe.anims.play("jumping");
        //animations
    }
    update(time, delta) {
        if (this.space.isDown) {
            this.scene.start("Transition3", this.data);
        }
    }
}

export default Level2Gained;