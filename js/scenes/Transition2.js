class Transition2 extends Phaser.Scene {
    constructor() {
        super({
            key: "Transition2"
        });
    }

    preload() {
        this.load.path = "./assets/";

        this.load.atlas("dog", "dog/dog.png", "dog/dog_atlas.json");
        this.load.atlas("gold_coins", "gold_coins/gold_coins.png", "gold_coins/gold_coins_atlas.json");
        this.load.image("ball_energy", "lasers/ball_energy.png");
        this.load.image("platform", "platform/platform.png");
    }
    create() {
        console.log(this);
        this.width = 800;
        this.height = 600;

        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0xE4D2AE);

        this.graphics.fillRect(0, 0, this.width, this.height);

        this.heroe = this.physics.add.sprite(150, 150, "dog").setScale(0.2);
        this.platform = this.physics.add.image(150, 210, "platform").setScale(0.2);
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
        this.laser = this.add.image(150, this.height / 2 + 100, "ball_energy").setScale(0.7);
        this.add.text(this.width / 2 - 100, this.height / 2 + 100, "Dodge laser beams and don't fall down ;)", {
            fontFamily: "Georgia",
            color: "#91763F",
            fontSize: 20
        });

        this.add.text(this.width / 2 + 50, this.height - 80, "SPACE : PLAY", {
            fontFamily: "Georgia",
            color: "#fff",
            fontSize: 30
        });

        console.log(Phaser.Input.Keyboard.KeyCodes); //types code

        //animations
        this.anims.create({
            key: "jump",
            frames: this.anims.generateFrameNames("dog", {
                prefix: "jump_r_",
                start: 0,
                end: 6
            }),
            repeat: -1,
            frameRate: 7
        });
        this.heroe.anims.play("jump");
        this.anims.create({
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
        //animations
    }
    update(time, delta) {

    }
}

export default Transition2;