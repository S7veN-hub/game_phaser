class Transition3 extends Phaser.Scene {
    constructor() {
        super({
            key: "Transition3"
        });
    }

    init(c) {
        this.data = c;
    }
    preload() {
        this.load.path = "./assets/";

        this.load.atlas("dog", "dog/dog.png", "dog/dog_atlas.json");
        this.load.atlas("gold_coins", "gold_coins/gold_coins.png", "gold_coins/gold_coins_atlas.json");
        this.load.atlas("flying_aliens", "flying_aliens/flying_aliens.png", "flying_aliens/flying_aliens_atlas.json");
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
        this.add.text(300, 150, "To jump type:   SPACE", {
            fontFamily: "Georgia",
            color: "#91763F",
            fontSize: 20
        });

        this.coin = this.physics.add.sprite(150, this.height / 2 - 10, "gold_coins");
        this.add.text(this.width / 2 - 150, this.height / 2 - 10, "Catch the coins to get points", {
            fontFamily: "Georgia",
            color: "#91763F",
            fontSize: 20
        });
        this.alien = this.physics.add.sprite(150, this.height / 2 + 100, "flying_aliens").setScale(0.3);;
        this.add.text(this.width / 2 - 100, this.height / 2 + 100, "Dodge the random aliens ;)", {
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
        this.anims.create({
            key: "flying_alien",
            frames: this.anims.generateFrameNames("flying_aliens", {
                prefix: "flying_alien",
                start: 1,
                end: 3
            }),
            repeat: -1,
            frameRate: 10
        });
        this.alien.anims.play("flying_alien");
        //animations
    }
    update(time, delta) {
        if (this.space.isDown) {
            this.audio_select.play();
            this.scene.start("Level3", this.data);
        }
    }
}

export default Transition3;