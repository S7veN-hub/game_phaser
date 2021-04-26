import Level1 from "./scenes/Level1.js";
import Level2 from "./scenes/Level2.js";

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
        Level2
    ]
};

new Phaser.Game(config);