var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ada4fb6a-2628-4b64-9eb3-228516d2677c","b106d6d7-bb2d-4446-ab49-d52b886e9b5e"],"propsByKey":{"ada4fb6a-2628-4b64-9eb3-228516d2677c":{"name":"superman.png_1","sourceUrl":"assets/v3/animations/I2Oj61nQZdvF7kaQge9OQqVvQINILeP_7YXJ69or4as/ada4fb6a-2628-4b64-9eb3-228516d2677c.png","frameSize":{"x":461,"y":231},"frameCount":1,"looping":true,"frameDelay":4,"version":"ff2hY9R9Gtk06gHib2VCz8C6yC1Tp_iJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":461,"y":231},"rootRelativePath":"assets/v3/animations/I2Oj61nQZdvF7kaQge9OQqVvQINILeP_7YXJ69or4as/ada4fb6a-2628-4b64-9eb3-228516d2677c.png"},"b106d6d7-bb2d-4446-ab49-d52b886e9b5e":{"name":"city.png_1","sourceUrl":"assets/v3/animations/I2Oj61nQZdvF7kaQge9OQqVvQINILeP_7YXJ69or4as/b106d6d7-bb2d-4446-ab49-d52b886e9b5e.png","frameSize":{"x":612,"y":408},"frameCount":1,"looping":true,"frameDelay":4,"version":"dG9uhp7z.HTVGRENpJZ.TISoQXDpWBM1","loadedFromSource":true,"saved":true,"sourceSize":{"x":612,"y":408},"rootRelativePath":"assets/v3/animations/I2Oj61nQZdvF7kaQge9OQqVvQINILeP_7YXJ69or4as/b106d6d7-bb2d-4446-ab49-d52b886e9b5e.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var city = createSprite(200, 200);
city.setAnimation("city.png_1");
var superhero = createSprite(40, 100);
superhero.setAnimation("superman.png_1");
superhero.scale = 0.5;
function draw() {
  background("skyblue");
  if (mousePressedOver(superhero)) {
    superhero.velocityX = 5;
  }
  if (superhero.x>430) {
    superhero.x = -20;
  }
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
