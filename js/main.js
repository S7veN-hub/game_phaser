import Loader from "./Loader.js";
import Level1 from "./scenes/Level1.js";

var config = {
    type: Phaser.AUTO,
    width:800,
    height: 600,
	parent: "container",  			//contenedor del juego(id)
	backgroundColor: "#fff",
    physics: {
		default: "arcade"
	},
    scene: [
        Loader, 
        Level1
    ]
};

var game = new Phaser.Game(config);
