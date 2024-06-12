// const country = document.querySelector('h2');
// const navigationControlRight=document.querySelector('.control-r');
// const navigationControlLeft=document.querySelector('.control-l');


// const Application=PIXI.Application;
// const app = new Application({
//     width: 1920,
//     height: 1080
// });

// document.body.appendChild(app.view);

// const loader = PIXI.Loader.shared;

// loader.add([
//     './images/img1.jpg',
//     './images/img2.jpg',
//     './images/img3.jpg',
//     './images/img4.jpg',
// ])

// .load(setup);

// function setup(loader, resources) {
//     const img1 = PIXI.Sprite.from(resources['./images/img1.jpg'].name);
//     const img2 = PIXI.Sprite.from(resources['./images/img2.jpg'].name);
//     const img3 = PIXI.Sprite.from(resources['./images/img3.jpg'].name);
//     const img4 = PIXI.Sprite.from(resources['./images/img4.jpg'].name);


//     img1.anchor.set(0.5);
//     img1.x=app.renderer.width/2;
//     img1.y=app.renderer.height/2;

//     img2.anchor.set(0.5);
//     img2.x=app.renderer.width/2;
//     img2.y=app.renderer.height/2;

//     img3.anchor.set(0.5);
//     img3.x=app.renderer.width/2;
//     img3.y=app.renderer.height/2;

//     img4.anchor.set(0.5);
//     img4.x=app.renderer.width/2;
//     img4.y=app.renderer.height/2;

//     const container = new PIXI.Container();
//     container.addChild(img4, img3, img2, img1);
//     app.stage.addChild(container);

//     const options={
//         amplitude:300,
//         wavelength: 0,
//         speed: 700,
//         brightness: 1,
//         radius: -1
//     }

//     const shockwaveFilter = new PIXI.filters.shockwaveFilter([
//         app.screen.width /2,
//         app.screen.height /2
//     ],
//     options, 0.8);

//     container.filters = [shockwaveFilter];


//     let currentCountry=1;
//     let waveReady=true;
//     navigationControlRight.addEventListener('click', function(){
//         if ((currentCountry<4)&& (waveReady===true)){
//             currentCountry++;
//             shockwaveFilter.wavelength=300;
//             switch(currentCountry){
//                 case 1:
//                     country.innerHTML = 'Pixel Palette';
//                     break;

//                 case 2:
//                     country.innerHTML = 'Go to home page';
//                     app.ticker.add(slide1To2);
//                     break

//                 case 3:
//                     country.innerHTML = 'Get your perfect skincare';
//                     app.ticker.add(slide2To3);
//                     break

//                 case 4:
//                     country.innerHTML = 'Catch up on the latest trends';
//                     app.ticker.add(slide3To4);
//                     break
//             }
//             function slide1To2(){
//                 shockwaveFilter.time += 0.01;
//                 img1.alpha-=0.008;
//                 waveReady=false;
//                 if (shockwaveFilter.time>2){
//                     shockwaveFilter.time = 0;
//                     shockwaveFilter.wavelength=0;
//                     waveReady=true;
//                     app.ticker.remove(slide1To2);
//                 }
//             }
//             function slide2To3(){
//                 shockwaveFilter.time += 0.01;
//                 img2.alpha-=0.008;
//                 waveReady=false;
//                 if (shockwaveFilter.time>2){
//                     shockwaveFilter.time = 0;
//                     shockwaveFilter.wavelength=0;
//                     waveReady=true;
//                     app.ticker.remove(slide2To3);
//                 }
//             }
//             function slide3To4(){
//                 shockwaveFilter.time += 0.01;
//                 img3.alpha-=0.008;
//                 waveReady=false;
//                 if (shockwaveFilter.time>2){
//                     shockwaveFilter.time = 0;
//                     shockwaveFilter.wavelength=0;
//                     waveReady=true;
//                     app.ticker.remove(slide3To4);
//                 }
//             }
//         }
//     });

//     navigationControlLeft.addEventListener('click', function(){
//         if ((currentCountry>1)&& (waveReady===true)){
//             currentCountry--;
//             shockwaveFilter.wavelength=300;
//             switch(currentCountry){
//                 case 1:
//                     country.innerHTML = 'Pixel Palette';
//                     break;

//                 case 2:
//                     country.innerHTML = 'Go to home page';
//                     app.ticker.add(slide3To2);
//                     break

//                 case 3:
//                     country.innerHTML = 'Get your perfect skincare';
//                     app.ticker.add(slide4To3);
//                     break

//                 case 4:
//                     country.innerHTML = 'Catch up on the latest trends';
                    
//             }
//             function slide4To3(){
//                 shockwaveFilter.time += 0.01;
//                 img4.alpha-=0.008;
//                 img2.alpha=1;
//                 waveReady=false;
//                 if (shockwaveFilter.time>2){
//                     shockwaveFilter.time = 0;
//                     shockwaveFilter.wavelength=0;
//                     img2.zIndex=2;
//                     waveReady=true;
//                     app.ticker.remove(slide4To3);
//                 }
//             }
//             function slide2To3(){
//                 shockwaveFilter.time += 0.01;
//                 img2.alpha-=0.008;
//                 waveReady=false;
//                 if (shockwaveFilter.time>2){
//                     shockwaveFilter.time = 0;
//                     shockwaveFilter.wavelength=0;
//                     waveReady=true;
//                     app.ticker.remove(slide2To3);
//                 }
//             }
//             function slide3To4(){
//                 shockwaveFilter.time += 0.01;
//                 img3.alpha-=0.008;
//                 waveReady=false;
//                 if (shockwaveFilter.time>2){
//                     shockwaveFilter.time = 0;
//                     shockwaveFilter.wavelength=0;
//                     waveReady=true;
//                     app.ticker.remove(slide3To4);
//                 }
//             }
//         }


//     });
// }




// // Ensure DOM is loaded before running PIXI code
// document.addEventListener("DOMContentLoaded", function() {
//     const Application = PIXI.Application;
//     const app = new Application({
//         width: 1920,
//         height: 1080,
//         backgroundColor: 0x1099bb  // Set a background color
//     });

//     // Append the PIXI view (canvas) to the body
//     document.body.appendChild(app.view);

//     // Create a loader instance
//     const loader = PIXI.Loader.shared;

//     // Add images to the loader
//     loader.add([
//         './images/img1.jpg',
//         './images/img2.jpg',
//         './images/img3.jpg',
//         './images/img4.jpg',
//     ])
//     .load(setup);  // Call the setup function after loading

//     // Setup function to handle loaded resources
//     function setup(loader, resources) {
//         const img1 = new PIXI.Sprite(resources['./images/img1.jpg'].texture);
//         const img2 = new PIXI.Sprite(resources['./images/img2.jpg'].texture);
//         const img3 = new PIXI.Sprite(resources['./images/img3.jpg'].texture);
//         const img4 = new PIXI.Sprite(resources['./images/img4.jpg'].texture);

//         // Optionally, position the images
//         img1.position.set(0, 0);
//         img2.position.set(400, 0);
//         img3.position.set(800, 0);
//         img4.position.set(1200, 0);

//         // Create a container and add the images
//         const container = new PIXI.Container();
//         container.addChild(img1, img2, img3, img4);
//         app.stage.addChild(container);

//         // Optionally, center the container
//         container.x = (app.screen.width - container.width) / 2;
//         container.y = (app.screen.height - container.height) / 2;
//     }
// });


const country = document.querySelector("h2");
const navigationControlRight = document.querySelector(".control-r");
const navigationControlLeft = document.querySelector(".control-l");

const Application = PIXI.Application;
const app = new Application({
  width: 1920,
  height: 1080
});

document.body.appendChild(app.view);

const loader = PIXI.Loader.shared;

loader
  .add([
    './images/imgi1.jpg',
    './images/imgi2.jpg',
    './images/imgi3.jpg',
    './images/imgi4.jpg',
  ])
  .load(setup);

function setup(loader, resources) {
  const img1 = PIXI.Sprite.from(
    resources['./images/imgi1.jpg'].name
  );
  const img2 = PIXI.Sprite.from(
    resources['./images/imgi2.jpg'].name
  );
  const img3 = PIXI.Sprite.from(
    resources["./images/imgi3.jpg"].name
  );
  const img4 = PIXI.Sprite.from(
    resources["./images/imgi4.jpg"].name
  );
  img1.width = 500;
  img1.height = 300;
  img2.width = 500;
  img2.height = 300;
  img3.width = 500;
  img3.height = 300;
  img4.width = 500;
  img4.height = 300;

  function centerImage(image) {
    image.anchor.set(0.5);
    image.x = app.renderer.width / 2;
    image.y = app.renderer.height / 2;
  }
  centerImage(img1);
  centerImage(img2);
  centerImage(img3);
  centerImage(img4);


  const container = new PIXI.Container();
  container.addChild(img4, img3, img2, img1);
  app.stage.addChild(container);

  container.sortableChildren = true;

  const options = {
    amplitude: 300, //300
    wavelength: 0, //160
    speed: 700, //500
    brightness: 1, //1
    radius: -1 //-1
  };

  const shockwaveFilter = new PIXI.filters.ShockwaveFilter(
    [app.screen.width / 2, app.screen.height / 2],
    options,
    0
  );

  container.filters = [shockwaveFilter];

  let currentCountry = 1;
  let waveReady = true;
  navigationControlRight.addEventListener("click", function () {
    if (currentCountry < 4 && waveReady === true) {
      currentCountry++;
      shockwaveFilter.wavelength = 300;
      switch (currentCountry) {
        case 1:
          country.innerHTML = "Maldives";
          break;
        case 2:
          country.innerHTML = "Turkey";
          app.ticker.add(slide1To2);
          break;
        case 3:
          country.innerHTML = "Seychelles";
          app.ticker.add(slide2To3);
          break;
        case 4:
          country.innerHTML = "Italy";
          app.ticker.add(slide3To4);
      }

      function slide1To2() {
        startAnimation(img1, img2);
        if (shockwaveFilter.time > 2) endAnimation(img1, img2, slide1To2);
      }

      function slide2To3() {
        startAnimation(img2, img3);
        if (shockwaveFilter.time > 2) endAnimation(img2, img3, slide2To3);
      }

      function slide3To4() {
        startAnimation(img3, img4);
        if (shockwaveFilter.time > 2) endAnimation(img3, img4, slide3To4);
      }
    }
  });

  navigationControlLeft.addEventListener("click", function () {
    if (currentCountry > 1 && waveReady === true) {
      currentCountry--;
      shockwaveFilter.wavelength = 300;
      switch (currentCountry) {
        case 1:
          country.innerHTML = "Maldives";
          app.ticker.add(slide2To1);
          break;
        case 2:
          country.innerHTML = "Turkey";
          app.ticker.add(slide3To2);
          break;
        case 3:
          country.innerHTML = "Seychelles";
          app.ticker.add(slide4To3);
          break;
        case 4:
          country.innerHTML = "Italy";
      }

      function slide4To3() {
        startAnimation(img4, img3);
        if (shockwaveFilter.time > 2) endAnimation(img4, img3, slide4To3);
      }

      function slide3To2() {
        startAnimation(img3, img2);
        if (shockwaveFilter.time > 2) endAnimation(img3, img2, slide3To2);
      }

      function slide2To1() {
        startAnimation(img2, img1);
        if (shockwaveFilter.time > 2) endAnimation(img2, img1, slide2To1);
      }
    }
  });

  function startAnimation(image1, image2) {
    shockwaveFilter.time += 0.01;
    image1.alpha -= 0.008;
    image2.alpha = 1;
    waveReady = false;
  }

  function endAnimation(image1, image2, tickerCallback) {
    shockwaveFilter.time = 0;
    shockwaveFilter.wavelength = 0;
    image2.zIndex = 2;
    image1.zIndex = 1;
    image1.alpha = 0;
    waveReady = true;
    app.ticker.remove(tickerCallback);
  }
}
