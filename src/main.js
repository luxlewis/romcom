// Create variables targetting the relevant DOM elements here 👇

var coverImageMain = document.querySelector('.cover-image');
var coverTitleMain = document.querySelector('.cover-title');
var tagline1Main = document.querySelector('.tagline-1');
var tagline2Main = document.querySelector('.tagline-2');
var form = document.querySelector('form');
var newCover = document.querySelector('.user-cover');
var newTitle = document.querySelector('.user-title');
var newTagline1 = document.querySelector('.user-desc1');
var newTagline2 = document.querySelector('.user-desc2');
var savedCoversSection = document.querySelector('.saved-covers-section')
var randomCoverButton = document.querySelector('.random-cover-button');
var savedView = document.querySelector('.saved-view');
var makeNewButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var makeNewForm = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var createNewButton = document.querySelector('.create-new-book-button');
var saveButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');

// We've provided a few variables below

var mySavedTitles = JSON.parse(localStorage.getItem("titles"));
if (localStorage.getItem('titles') == null) {
  localStorage.setItem('titles', JSON.stringify(titles));
};

var mySavedDescriptors = JSON.parse(localStorage.getItem('descriptors'));
if (localStorage.getItem('descriptors') == null) {
  localStorage.setItem('descriptors', JSON.stringify(descriptors))
};

var mySavedCovers = JSON.parse(localStorage.getItem('covers'));
if (localStorage.getItem('covers') == null) {
  localStorage.setItem('covers', JSON.stringify(covers));
};
debugger;


var mySavedBooks = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

localStorage.setItem('items', JSON.stringify(mySavedBooks));

const data = JSON.parse(localStorage.getItem('items'))


// var savedCovers = [
//   new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
// ];

// var currentCover;
var myCover;

// Add your event listeners here 👇
document.addEventListener('DOMContentLoaded', randomPoster);
randomCoverButton.addEventListener('click', randomPoster);
makeNewButton.addEventListener('click', showMakeForm);
homeButton.addEventListener('click', showMain);
viewSavedButton.addEventListener('click', showSaved);
createNewButton.addEventListener('click', createPoster);
saveButton.addEventListener('click', showNewPoster);
saveButton.addEventListener('click', saveNewPoster);
// saveButton.addEventListener('click', addPoster);
// Create your eent handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomPoster() {
  coverImageMain.src = mySavedCovers[getRandomIndex(mySavedCovers)];
  coverTitleMain.innerHTML= mySavedTitles[getRandomIndex(mySavedTitles)];
  tagline1Main.innerHTML = mySavedDescriptors[getRandomIndex(mySavedDescriptors)];
  tagline2Main.innerHTML= mySavedDescriptors[getRandomIndex(mySavedDescriptors)];
};

function showMakeForm() {
  makeNewForm.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  saveButton.classList.remove('hidden');
  homeView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  makeNewButton.classList.add('hidden');
  savedView.classList.add('hidden');
};

function showSaved() {
  savedView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  makeNewButton.classList.remove('hidden');
  makeNewForm.classList.add('hidden');
  homeView.classList.add('hidden');
  saveButton.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  viewSavedButton.classList.add('hidden');
  displaySaved();
};

function showMain() {
  homeView.classList.remove('hidden');
  makeNewForm.classList.add('hidden');
  homeButton.classList.add('hidden');
  saveButton.classList.remove('hidden');
  randomCoverButton.classList.remove('hidden');
  savedView.classList.add('hidden');
  makeNewButton.classList.remove('hidden');
  viewSavedButton.classList.remove('hidden');
};

function createPoster(e) {
  e.preventDefault();
  coverImageMain.src = newCover.value;
  coverTitleMain.innerHTML= newTitle.value;
  tagline1Main.innerHTML = newTagline1.value;
  tagline2Main.innerHTML= newTagline2.value;
  form.reset();
  showMain();
  showNewPoster();
};

function showNewPoster() {
  myCover = new Cover(coverImageMain.src, coverTitleMain.innerHTML, tagline1Main.innerHTML, tagline2Main.innerHTML);
};

function saveNewPoster() {
  debugger;
  var isIncluded = false;
  for (var i = 0; i < mySavedBooks.length; i++) {
    if (mySavedBooks[i]['cover'] == myCover['cover'] && mySavedBooks[i]['title'] == myCover['title'] && mySavedBooks[i]['tagline1'] == myCover['tagline1'] && mySavedBooks[i]['tagline2'] == myCover['tagline2']) {
      isIncluded = true;
      break;
    }
  }
  if (!isIncluded) {
    mySavedBooks.push(myCover);
    localStorage.setItem('items', JSON.stringify(mySavedBooks));
  };
  if (!mySavedCovers.includes(myCover['cover'])) {
    mySavedCovers.push(myCover.cover);
    localStorage.setItem('covers', JSON.stringify(mySavedCovers));
    }
  if (!mySavedTitles.includes(myCover['title'])){
    mySavedTitles.push(myCover.title);
    localStorage.setItem('titles', JSON.stringify(mySavedTitles));
  }
  if (!mySavedDescriptors.includes(myCover['tagline1'])){
    mySavedDescriptors.push(myCover.tagline1)
    }
  if(!mySavedDescriptors.includes(myCover['tagline2'])) {
    mySavedDescriptors.push(myCover.tagline2);
    localStorage.setItem('descriptors', JSON.stringify(mySavedDescriptors))
  }
};

function displaySaved() {
  savedCoversSection.innerHTML = '';
  mySavedBooks.forEach(item => {
    let newItem = document.createElement('div')
    newItem.classList.add('mini-cover')
    let newMiniImg = document.createElement('img')
    newMiniImg.classList.add('mini-cover')
    let newMiniTitle = document.createElement('h2')
    newMiniTitle.classList.add('cover-title')
    let miniTagline = document.createElement('h3')
    miniTagline.classList.add('tagline')
    miniTagline.innerHTML = "A tale of "
    let newMiniTagline1 = document.createElement('span');
    let newMiniTagline2 = document.createElement('span');
    newMiniTagline1.classList.add('tagline-1')
    miniTagline.appendChild(newMiniTagline1)
    newMiniTagline2.classList.add('tagline-2')
    miniTagline.appendChild(newMiniTagline2)
    newMiniImg.src = item['cover']
    newMiniTitle.innerHTML = item['title']
    newMiniTagline1.innerHTML = item['tagline1'] + ' and '
    newMiniTagline2.innerHTML = item['tagline2']
    newItem.appendChild(newMiniImg)
    newItem.appendChild(newMiniTitle)
    newItem.appendChild(miniTagline)
    savedCoversSection.appendChild(newItem)
  })
};
