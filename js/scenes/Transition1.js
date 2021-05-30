class Transition1 extends Phaser.Scene {
    constructor() {
        super({
            key: "Transition1"
        });
    }

    init(c) {
        this.character = c.character;
        this.audio = c.audio;
    }
    preload() {
        this.load.path = "./assets/";

        this.load.atlas("dog", "dog/dog.png", "dog/dog_atlas.json");
        this.load.atlas("cat", "cat/cat.png", "cat/cat_atlas.json");
        this.load.atlas("gold_coins", "gold_coins/gold_coins.png", "gold_coins/gold_coins_atlas.json");
        this.load.image("red_laser", "lasers/red_laser.png");
        this.load.audio("select", "audios/select.wav");
    }
    create() {
        console.log(this);
        this.width = 800;
        this.height = 600;

        //audios
        this.audio_select = this.sound.add("select", {loop: false});
        //audios
        
        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0xE4D2AE);

        this.graphics.fillRect(0, 0, this.width, this.height);

        this.heroe = this.physics.add.sprite(150, 150, "dog").setScale(0.2);
        this.add.text(300, 150, "To Move use the types:", {
            fontFamily: "Georgia",
            color: "#91763F",
            fontSize: 20
        });
        this.add.text(this.width - 180, 120, "W", {
            fontFamily: "Georgia",
            color: "#91763F",
            fontSize: 30
        });
        this.add.text(this.width - 230, 170, "A     S     D", {
            fontFamily: "Georgia",
            color: "#91763F",
            fontSize: 30
        });

        this.coin = this.physics.add.sprite(150, this.height / 2 - 10, "gold_coins");
        this.add.text(this.width / 2 - 150, this.height / 2 - 10, "Catch the coins to get points", {
            fontFamily: "Georgia",
            color: "#91763F",
            fontSize: 20
        });
        this.laser = this.add.image(150, this.height / 2 + 100, "red_laser");
        this.add.text(this.width / 2 - 100, this.height / 2 + 100, "Dodge laser beams ;)", {
            fontFamily: "Georgia",
            color: "#91763F",
            fontSize: 20
        });

        this.add.text(this.width / 2 + 50, this.height - 80, "SPACE : PLAY", {
            fontFamily: "Georgia",
            color: "#fff",
            fontSize: 30
        });

        // console.log(Phaser.Input.Keyboard.KeyCodes);

        this.space = this.input.keyboard.addKey(32);

        //animations
        this.anims.create({
            key: "run_r",
            frames: this.anims.generateFrameNames("dog", {
                prefix: "run_r_",
                start: 1,
                end: 7
            }),
            repeat: -1,
            frameRate: 10
        });
        this.heroe.anims.play("run_r");
        this.anims.create({
            key: "coin",
            frames: this.anims.generateFrameNames("gold_coins", {
                prefix: "gold_",
                start: 0,
                end: 7
            }),
            repeat: -1,
            frameRate: 10
        });
        this.coin.anims.play("coin");
        //animations
    }
    update(time, delta) {
        if (this.space.isDown) {
            this.audio.stop();
            this.audio_select.play();
            this.scene.start("Level1", {character: this.character});
        }
    }
}

export default Transition1;