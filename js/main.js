import Level1 from "./scenes/Level1.js";
import Level2 from "./scenes/Level2.js";
import Level3 from "./scenes/Level3.js";

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
        Level3
    ]
};

new Phaser.Game(config);