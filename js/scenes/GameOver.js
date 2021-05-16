class GameOver extends Phaser.Scene {
    constructor() {
        super({
            key: "GameOver"
        });
    }

    init(c) {
        this.points = c;
    }
    preload() {

    }
    create() {
        console.log(this);
        this.width = 800;
        this.height = 600;

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

        console.log(Phaser.Input.Keyboard.KeyCodes); //types code

        this.space = this.input.keyboard.addKey(32);
    }
    update() {
        if (this.space.isDown) {
            this.scene.start("Intro");
        }
    }
}

export default GameOver;