class BestScores extends Phaser.Scene {
    constructor() {
        super({
            key: "BestScores"
        });
    }

    preload() {
        this.load.path = "./assets/";

        this.load.audio("doodle", "audios/doodle.mp3");
        this.load.audio("select", "audios/select.wav");
    }
    create() {
        console.log(this);
        this.width = 800;
        this.height = 600;
        this.scores = [];

        //audio
        this.audio_doodle = this.sound.add("doodle", {loop: true});
        this.audio_doodle.play();
        this.audio_select = this.sound.add("select", {loop: false});
        //audio

        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0x673EEE);

        this.graphics.fillRect(0, 0, this.width, this.height);

        this.add.text(this.width / 2 + 50, this.height - 80, "SPACE : Menu", {
            fontFamily: "Georgia",
            color: "#fff",
            fontSize: 30
        });
        this.add.text(240, 50, "BEST SCORES", {
            fontFamily: "Georgia",
            color: "#35159E",
            fontSize: 50
        });

        this.user1 = this.add.text(200, 150, "-", {
            fontFamily: "Georgia",
            color: "#C354D2",
            fontSize: 30
        });
        this.user2 = this.add.text(200, 220, "-", {
            fontFamily: "Georgia",
            color: "#C354D2",
            fontSize: 30
        });
        this.user3 = this.add.text(200, 290, "-", {
            fontFamily: "Georgia",
            color: "#C354D2",
            fontSize: 30
        });
        this.user4 = this.add.text(200, 360, "-", {
            fontFamily: "Georgia",
            color: "#C354D2",
            fontSize: 30
        });
        this.user5 = this.add.text(200, 430, "-", {
            fontFamily: "Georgia",
            color: "#C354D2",
            fontSize: 30
        });

        this.points1 = this.add.text(this.width - 300, 150, "-", {
            fontFamily: "Georgia",
            color: "#C354D2",
            fontSize: 30
        });
        this.points2 = this.add.text(this.width - 300, 220, "-", {
            fontFamily: "Georgia",
            color: "#C354D2",
            fontSize: 30
        });
        this.points3 = this.add.text(this.width - 300, 290, "-", {
            fontFamily: "Georgia",
            color: "#C354D2",
            fontSize: 30
        });
        this.points4 = this.add.text(this.width - 300, 360, "-", {
            fontFamily: "Georgia",
            color: "#C354D2",
            fontSize: 30
        });
        this.points5 = this.add.text(this.width - 300, 430, "-", {
            fontFamily: "Georgia",
            color: "#C354D2",
            fontSize: 30
        });

        this.loadScores();
        
        console.log(Phaser.Input.Keyboard.KeyCodes); //types code

        this.space = this.input.keyboard.addKey(32);
    }
    update(time, delta) {
        if (this.space.isDown) {
            this.audio_doodle.stop();
            this.audio_select.play();
            location.reload();
        }
    }
    loadScores() {
        fetch("app/bestscores.php")
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            this.scores = response;
            this.setScores();
        });
    }
    setScores() {
        console.log(this.scores);

        if (this.scores[0]) {
            this.user1.setText(this.scores[0].user);
            this.points1.setText(this.scores[0].points);
        }
        if (this.scores[1]) {
            this.user2.setText(this.scores[1].user);
            this.points2.setText(this.scores[1].points);
        }
        if (this.scores[2]) {
            this.user3.setText(this.scores[2].user);
            this.points3.setText(this.scores[2].points);
        }
        if (this.scores[3]) {
            this.user4.setText(this.scores[3].user);
            this.points4.setText(this.scores[3].points);
        }
        if (this.scores[4]) {
            this.user5.setText(this.scores[4].user);
            this.points5.setText(this.scores[4].points);
        }
    }
}

export default BestScores;