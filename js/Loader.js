class Loader extends Phaser.Scene {
    constructor() {
        super({key: "Loader"});
    }

    preload() {
        console.log("Loader");
        this.load.on("complete", () => {
            this.scene.start("Level1");
        });
        this.load.path = "./assets/";
        /*this.load.atlas("dog", "dog/dog.png", "dog/dog_atlas.json");
        this.load.atlas("cat", "dog/cat.png", "dog/cat_atlas.json");*/
        this.load.image("alien", "pajaro.png");
    }
}

export default Loader;