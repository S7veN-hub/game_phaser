class GameOver extends Phaser.Scene {
    constructor() {
        super({
            key: "GameOver"
        });
    }

    init(c) {
        this.points = c.points;
    }
    preload() {
        this.load.path = "./assets/";

        this.load.audio("select", "audios/select.wav");
    }
    create() {
        console.log(this);
        this.width = 800;
        this.height = 600;

        //audio
        this.audio_select = this.sound.add("select", {loop: false});
        //audio

        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0xF683B9);

        this.graphics.fillRect(0, 0, this.width, this.height);

        this.add.text(130, 150, "GAME OVER", {
            fontFamily: "Georgia",
            color: "#D73E85",
            fontSize: 90
        });
        this.add.text(this.width / 2 - 100, this.height / 2 + 10, "POINTS:", {
            fontFamily: "Georgia",
            color: "#D73E85",
            fontSize: 40
        });
        this.add.text(this.width / 2 - 100, this.height / 2 + 80, this.points, {
            fontFamily: "Arial",
            color: "#D73E85",
            fontSize: 60
        });
        this.add.text(this.width / 2 + 50, this.height - 80, "SPACE : MENU", {
            fontFamily: "Georgia",
            color: "#fff",
            fontSize: 30
        });
        this.add.text(50, this.height - 80, "C : Record your puntuation", {
            fontFamily: "Georgia",
            color: "#D73E85",
            fontSize: 20
        });

        console.log(Phaser.Input.Keyboard.KeyCodes); //types code

        this.space = this.input.keyboard.addKey(32);
        this.c = this.input.keyboard.addKey(67);
    }
    update() {
        if (this.space.isDown) {
            this.audio_select.play();
            location.reload();
        }
        if (this.c.isDown) {
            console.log("Points sent");
            this.audio_select.play();
            window.open("form.php?points="+this.points, "_blank");
        }
    }
}

export default GameOver;