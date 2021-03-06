<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>doKKat ;=)</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=KoHo:ital@1&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <?php
        session_start();
        if (isset($_SESSION["points"])) {
            unset($_SESSION["points"]);
        }
        $_SESSION["register"] = "register";
    ?>
    <div id="section-game">
        <div id="container"></div>
        <a href="#section-1"><img src="./assets/icons/arrow-alt-circle-down-regular.svg" alt="arrow" height="50px" class="icon"></a>
    </div>
    <div id="section-1">
        <img src="./assets/dog/unpack/run_r_2.png" alt="run_r_2" class="character">
        <p>
            Use the W A S D keys to scroll. Avoid the Aliens' lasers and get all the coins.
        </p>
        <img src="./assets/gold_coins/unpack/gold_0.png" alt="gold_0" class="coin">
        <p>
            By getting each coin, you get 10 points.
        </p>
        <img src="./assets/aliens/unpack/aliens_0.png" alt="aliens" class="character">
        <p>
            Avoid being touched by aliens. That will deduct points.
        </p>
        <h4>LEVEL 1</h4>
        <a href="#section-2" class="icon2"><img src="./assets/icons/arrow-alt-circle-down-regular.svg" alt="arrow" height="50px"></a>
    </div>
    <div id="section-2">
        <img src="./assets/ovni/ovni.png" alt="ovni" class="ovni">
        <img src="./assets/cat/unpack/jump_3.png" alt="jump_3" class="character">
        <img src="./assets/platform/platform.png" alt="platform" class="platform">
        <p>
            Dodge the lasers of the UFO while jumping the platforms and do not fall. If you fall, you will lose 15 points.
        </p>
        <p>
            Use the W A S D keys to move from one side to the other and jump =).
        </p>
        <h4>LEVEL 2</h4>
        <a href="#section-3"  class="icon2"><img src="./assets/icons/arrow-alt-circle-down-regular.svg" alt="arrow" height="50px"></a>
    </div>
    <div id="section-3">
        <img src="./assets/flying_aliens/unpack/flying_alien1.png" alt="flying_alien1" class="character">
        <p>
            Avoid the flying aliens and get all the coins you can.
        </p>
        <img src="./assets/platform/platform.png" alt="platform" class="platform">
        <img src="./assets/dog/unpack/run_r_2.png" alt="run_r_2" class="character">
        <p>
            You can use the platforms to dodge the aliens and get coins.
        </p>
        <p>
            To jump, press the space key.
        </p>
        <h4>LEVEL 3</h4>
        <a href="#section-game"  class="icon2"><img src="./assets/icons/angle-double-up-solid.svg" alt="angle" height="50px"></a>
    </div>
    <footer>
        <div id="footsec-1">

        </div>
        <div id="footsec-2">
            <p>
                Application made with
            </p>
            <a href="https://photonstorm.github.io/phaser3-docs/index.html" target="_blank"><img src="./assets/extras/phaser3-logo.png" alt="phaser3-logo"></a>
            <p>
                Phaser is a 2D game framework used for making HTML5 games for desktop and mobile. It is free software developed by Photon Storm.
                Phaser uses both a Canvas and WebGL renderer internally and can automatically swap between them based on browser support. 
                This allows for fast rendering across desktop and mobile. It uses the Pixi.js library for rendering.
            </p>
        </div>
        <div id="footsec-3">
            <p>
                Application developed by S7veN:
            </p>
            <a href="https://github.com/S7veN-hub" target="_blank">Github</a>
            <p>
                Tools:
            </p>
            <div><a href="https://www.youtube.com/watch?v=4RaN4g9KzDo&list=PLL_H5w4KA8dP9pPayzYxHCD4IQ80nkfY9" target="_blank">Youtube Tutorial</a></div>
            <div><a href="https://www.gameart2d.com/freebies.html" target="_blank">Sprites</a></div>
            <div><a href="https://gammafp.com/tools/" target="_blank">Animations and Spridesheets</a></div>
            <div><a href="https://opengameart.org/art-search-advanced?keys=&title=&field_art_tags_tid_op=or&field_art_tags_
            tid=&name=&field_art_type_tid%5B%5D=13&field_art_licenses_tid%5B%5D=4&sort_by=count&sort_order=DESC&items_
            per_page=24&Collection=" target="_blank">Audios</a></div>
        </div>
        <div id="footsec-1">

        </div>
    </footer>

    
    <script type="text/javascript" src="./node_modules/phaser/dist/phaser.js"></script>
    <!-- <script src="//cdn.jsdelivr.net/npm/phaser@3.51.0/dist/phaser.js"></script> -->
    <script type="module" src="./js/main.js"></script>
</body>
</html>