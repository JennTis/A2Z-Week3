let url1 = "https://api.wordnik.com/v4/word.json/";
let word = "moon";
let word2 = "room";
let word3 = "telephone";
let word4 = "ballon";
let word5 = "cow";
let word6 = "bears";
let word7 = "kittens";
let word8 = "mittens";
let word9 = "house";
let word10 = "mouse";
let word11 = "mush";
let word12 = "lady";
let url2 = "/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"

let link;

function setup() {
  noCanvas();
  moon = select('#word');
  moon.mousePressed(askWordnikMoon);
  room = select('#word2');
  room.mousePressed(askWordnikRoom);
  telephone = select('#word3');
  telephone.mousePressed(askWordnikTelephone);
  balloon = select('#word4');
  balloon.mousePressed(askWordnikBalloon);
  cow = select('#word5');
  cow.mousePressed(askWordnikCow);
  bears = select('#word6');
  bears.mousePressed(askWordnikBears);
  kittens = select('#word7');
  kittens.mousePressed(askWordnikKittens);
  mittens = select('#word8');
  mittens.mousePressed(askWordnikMittens);
  house = select('#word9');
  house.mousePressed(askWordnikHouse);
  mouse = select('#word10');
  mouse.mousePressed(askWordnikMouse);
  mush = select('#word11');
  mush.mousePressed(askWordnikMush);
  lady = select('#word12');
  lady.mousePressed(askWordnikLady);

}

function askWordnikMoon() {
  loadJSON(url1 + word + url2, gotData);
}
function askWordnikRoom() {
  loadJSON(url1 + word2 + url2, gotRoom);
}
function askWordnikTelephone() {
  loadJSON(url1 + word3 + url2, gotTelephone);
}
function askWordnikBalloon() {
  loadJSON(url1 + word4 + url2, gotBalloon);
}
function askWordnikCow() {
  loadJSON(url1 + word5 + url2, gotCow);
}
function askWordnikBears() {
  loadJSON(url1 + word6 + url2, gotBears);
}
function askWordnikKittens() {
  loadJSON(url1 + word7 + url2, gotKittens);
}
function askWordnikMittens() {
  loadJSON(url1 + word8 + url2, gotMittens);
}
function askWordnikHouse() {
  loadJSON(url1 + word9 + url2, gotHouse);
}
function askWordnikMouse() {
  loadJSON(url1 + word10 + url2, gotMouse);
}
function askWordnikMush() {
  loadJSON(url1 + word11 + url2, gotMush);
}
function askWordnikLady() {
  loadJSON(url1 + word12 + url2, gotLady);
}

function gotData(data) {
  if (data.length === 0) {
    createP('no related words');
  } else {
    let index1 = floor(random(0, data.length));
    let index2 = floor(random(0, data[index1].words.length));
    word = data[index1].words[index2];
    moon.html(word);
  }
}

function gotRoom(data) {
  if (data.length === 0) {
    createP('no related words');
  } else {
    let index1 = floor(random(0, data.length));
    let index2 = floor(random(0, data[index1].words.length));
    word = data[index1].words[index2];
    room.html(word);
  }
}

function gotTelephone(data) {
  if (data.length === 0) {
    createP('no related words');
  } else {
    let index1 = floor(random(0, data.length));
    let index2 = floor(random(0, data[index1].words.length));
    word = data[index1].words[index2];
    telephone.html(word);
  }
}

function gotBalloon(data) {
  if (data.length === 0) {
    createP('no related words');
  } else {
    let index1 = floor(random(0, data.length));
    let index2 = floor(random(0, data[index1].words.length));
    word = data[index1].words[index2];
    balloon.html(word);
  }
}
function gotCow(data) {
  if (data.length === 0) {
    createP('no related words');
  } else {
    let index1 = floor(random(0, data.length));
    let index2 = floor(random(0, data[index1].words.length));
    word = data[index1].words[index2];
    cow.html(word);
  }
}
function gotBears(data) {
  if (data.length === 0) {
    createP('no related words');
  } else {
    let index1 = floor(random(0, data.length));
    let index2 = floor(random(0, data[index1].words.length));
    word = data[index1].words[index2];
    bears.html(word);
  }
}
function gotKittens(data) {
  if (data.length === 0) {
    createP('no related words');
  } else {
    let index1 = floor(random(0, data.length));
    let index2 = floor(random(0, data[index1].words.length));
    word = data[index1].words[index2];
    kittens.html(word);
  }
}
function gotMittens(data) {
  if (data.length === 0) {
    createP('no related words');
  } else {
    let index1 = floor(random(0, data.length));
    let index2 = floor(random(0, data[index1].words.length));
    word = data[index1].words[index2];
    mittens.html(word);
  }
}
function gotHouse(data) {
  if (data.length === 0) {
    createP('no related words');
  } else {
    let index1 = floor(random(0, data.length));
    let index2 = floor(random(0, data[index1].words.length));
    word = data[index1].words[index2];
    house.html(word);
  }
}
function gotMouse(data) {
  if (data.length === 0) {
    createP('no related words');
  } else {
    let index1 = floor(random(0, data.length));
    let index2 = floor(random(0, data[index1].words.length));
    word = data[index1].words[index2];
    mouse.html(word);
  }
}
function gotMush(data) {
  if (data.length === 0) {
    createP('no related words');
  } else {
    let index1 = floor(random(0, data.length));
    let index2 = floor(random(0, data[index1].words.length));
    word = data[index1].words[index2];
    mush.html(word);
  }
}
function gotLady(data) {
  if (data.length === 0) {
    createP('no related words');
  } else {
    let index1 = floor(random(0, data.length));
    let index2 = floor(random(0, data[index1].words.length));
    word = data[index1].words[index2];
    lady.html(word);
  }
}
