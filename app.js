'use strict';

//array to hold all images
Asset.allAssets = [];

//create objects for assets (images)
function Asset(name,filepath) {
  this.name=name;
  this.filepath=filepath;
  Asset.allAssets.push(this);
}

new Asset('bag','img/bag.jpg');
new Asset('banana','img/banana.jpg');
new Asset('bathroom','img/bathroom.jpg');
new Asset('boots','img/boots.jpg');
new Asset('breakfast','img/breakfast.jpg');
new Asset('bubblegum','img/bubblegum.jpg');
new Asset('chair','img/chair.jpg');
new Asset('cthulhu','img/cthulhu.jpg');
new Asset('dog-duck','img/dog-duck.jpg');
new Asset('dragon','img/dragon.jpg');
new Asset('pen','img/pen.jpg');
new Asset('pet-sweep','img/pet-sweep.jpg');
new Asset('scissors','img/scissors.jpg');
new Asset('shark','img/shark.jpg');
new Asset('sweep','img/sweep.png');
new Asset('tauntaun','img/tauntaun.jpg');
new Asset('unicorn','img/unicorn.jpg');
new Asset('usb','img/usb.gif');
new Asset('water-can','img/water-can.jpg');
new Asset('wine-glass','img/wine-glass.jpg');

//event listener to trackt clicks of assets images
var p1=1;
var p2=2;
var p3=3;
var imageContainer1 = document.getElementById('assets1');
//imageContainer1.addEventListener('click',randomAsset);
imageContainer1.addEventListener('click',function() {randomAssetClick(p1);});
var imageContainer2 = document.getElementById('assets2');
//imageContainer2.addEventListener('click',randomAsset);
imageContainer2.addEventListener('click',function() {randomAssetClick(p2);});
var imageContainer3 = document.getElementById('assets3');
//imageContainer3.addEventListener('click',randomAsset);
imageContainer3.addEventListener('click',function() {randomAssetClick(p3);});

//randomAssetClick(p1);

//display ramdom asset images
function randomAsset() {
  var randomIdx1 = Math.floor(Math.random() * Asset.allAssets.length);
  imageContainer1.src = Asset.allAssets[randomIdx1].filepath;
  do {
    var randomIdx2 = Math.floor(Math.random() * Asset.allAssets.length);
  }
  while(randomIdx1 == randomIdx2);
  imageContainer2.src = Asset.allAssets[randomIdx2].filepath;
  do {
    var randomIdx3 = Math.floor(Math.random() * Asset.allAssets.length);
  }
  while(randomIdx1 == randomIdx3 || randomIdx2 == randomIdx3);
  imageContainer3.src = Asset.allAssets[randomIdx3].filepath;
}
randomAsset();

//display ramdom asset images
function randomAssetClick(p) {
  var path1b = imageContainer1.src;
  var path2b = imageContainer2.src;
  var path3b = imageContainer3.src;
  //alert(path1);
  do {
    var randomIdx1 = Math.floor(Math.random() * Asset.allAssets.length);
    imageContainer1.src = Asset.allAssets[randomIdx1].filepath;
    var path1a= imageContainer1.src;
    var sameImage = false;
    if(path1a===path1b && p===1) {
      sameImage = true;
    }
  }
  while(sameImage);
  //while(path1===imageContainer1.src);

  do {
    var randomIdx2 = Math.floor(Math.random() * Asset.allAssets.length);
    imageContainer2.src = Asset.allAssets[randomIdx2].filepath;
    var path2a= imageContainer2.src;
    var sameImage = false;
    if(path2a===path2b && p===2) {
      sameImage = true;
    }  
  }
  while(randomIdx1 == randomIdx2 || sameImage);

  do {
    var randomIdx3 = Math.floor(Math.random() * Asset.allAssets.length);
    imageContainer3.src = Asset.allAssets[randomIdx3].filepath;
    var path3a= imageContainer3.src;
    var sameImage = false;
    if(path3a===path3b && p===3) {
      sameImage = true;
    } 
  }
  while(randomIdx1 == randomIdx3 || randomIdx2 == randomIdx3 || sameImage);
}
