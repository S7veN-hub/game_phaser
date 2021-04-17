import Level1 from "./scenes/Level1.js";

const config = {
    type: Phaser.CANVAS,
    width:800,
    height: 600,
	parent: "container",  			//contenedor del juego(id)
	backgroundColor: "#fff",
    physics: {
		default: "arcade"
	},
    scene: [
        Level1
    ]
};

new Phaser.Game(config);