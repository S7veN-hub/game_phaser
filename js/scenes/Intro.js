class Intro extends Phaser.Scene {
    constructor() {
        super({
            key: "Intro"
        });
    }

    preload() {
        this.load.path = "./assets/";

        this.load.atlas("dog", "dog/dog.png", "dog/dog_atlas.json");
        this.load.atlas("cat", "cat/cat.png", "cat/cat_atlas.json");
        this.load.atlas("pointer", "pointer/pointer.png", "pointer/pointer_atlas.json");

        this.load.audio("menu", "audios/menu.mp3");
        this.load.audio("click", "audios/click.wav");
        this.load.audio("select", "audios/select.wav");
    }
    create() {
        console.log(this);
        this.width = 800;
        this.height = 600;
        this.character = "";

        //audio
        this.audio_menu = this.sound.add("menu", {loop: true});
        this.audio_menu.play();
        this.audio_click = this.sound.add("click", {loop: false});
        this.audio_select = this.sound.add("select", {loop: false});
        this.sound.pauseOnBlur = false;
        //audio

        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0x3D6492);

        this.graphics.fillRect(0, 0, this.width, this.height);

        this.dog = this.physics.add.sprite(this.width / 2 - 150, this.height / 2, "dog").setScale(0.5);
        this.cat = this.physics.add.sprite(this.width / 2 + 150, this.height / 2, "cat").setScale(0.5);

        this.pointer = this.physics.add.sprite(this.width / 2 - 150, this.height / 2 + 150, "pointer").setScale(0.4);

        this.add.text(this.width / 2 - 70, 50, "doKKat", {
            fontFamily: "Georgia",
            color: "#DBC630",
            fontSize: 50
        });

        this.add.text(100, this.height - 100, "Z : Chose your DOG HERO", {
            fontFamily: "Georgia",
            color: "#fff",
            fontSize: 20
        });
        this.add.text(100, this.height - 60, "X : Chose your CAT HERO", {
            fontFamily: "Georgia",
            color: "#fff",
            fontSize: 20
        });
        this.add.text(this.width / 2 + 50, this.height - 80, "SPACE : PLAY", {
            fontFamily: "Georgia",
            color: "#fff",
            fontSize: 30
        });
        this.add.text(50, 50, "C : Best Scores", {
            fontFamily: "Georgia",
            color: "#093C78",
            fontSize: 20
        });

        //animations
        this.anims.create({
            key: "idleCat",
            frames: this.anims.generateFrameNames("cat" , {
                prefix: "idle_",
                start: 1,
                end: 9
            }),
            repeat: -1,
            frameRate: 10
        });
        this.cat.anims.play("idleCat");
        this.anims.create({
            key: "idleDog",
            frames: this.anims.generateFrameNames("dog" , {
                prefix: "idle_r_",
                start: 1,
                end: 9
            }),
            repeat: -1,
            frameRate: 10
        });
        this.dog.anims.play("idleDog");
        this.anims.create({
            key: "pointer",
            frames: this.anims.generateFrameNames("pointer" , {
                prefix: "pointer",
                start: 1,
                end: 2
            }),
            repeat: -1,
            frameRate: 7
        });
        this.pointer.anims.play("pointer");
        //animations

        console.log(Phaser.Input.Keyboard.KeyCodes); //types code

        this.z = this.input.keyboard.addKey(90);
        this.x = this.input.keyboard.addKey(88);
        this.c = this.input.keyboard.addKey(67);
        this.space = this.input.keyboard.addKey(32);
    }
    update(time, delta) {
        if (this.z.isDown) {
            this.pointer.x = this.width / 2 - 150;
            this.audio_click.play();
        }
        if (this.x.isDown) {
            this.pointer.x = this.width / 2 + 150;
            this.audio_click.play();
        }
        if (this.space.isDown) {
            if (this.pointer.x < this.width / 2) {
                this.character = "dog";
            } else {
                this.character = "cat";
            }
            this.audio_select.play();
            this.scene.start("Transition1", {character: this.character, audio: this.audio_menu});
        }
        if (this.c.isDown) {
            this.audio_menu.stop();
            this.audio_select.play();
            this.scene.start("BestScores");
        }
    }
}

export default Intro;