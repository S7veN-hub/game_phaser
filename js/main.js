import Intro from "./scenes/Intro.js";
import Transition1 from "./scenes/Transition1.js";
import Level1 from "./scenes/Level1.js";
import Level1Gained from "./scenes/Level1Gained.js";
import Transition2 from "./scenes/Transition2.js";
import Level2 from "./scenes/Level2.js";
import Level2Gained from "./scenes/Level2Gained.js";
import Transition3 from "./scenes/Transition3.js";
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
        Intro,
        Transition1,
        Level1,
        Level1Gained,
        Transition2,
        Level2,
        Level2Gained,
        Transition3,
        Level3
    ]
};

new Phaser.Game(config);