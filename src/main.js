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

var currentCover;

// Add your event listeners here 👇
document.addEventListener('DOMContentLoaded', randomPoster);
randomCoverButton.addEventListener('click', randomPoster);
makeNewButton.addEventListener('click', showMakeForm);
homeButton.addEventListener('click', showMain);
viewSavedButton.addEventListener('click', showSaved);
createNewButton.addEventListener('click', createPoster);
saveButton.addEventListener('click', saveNew)
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

var myCover;

function createPoster(e) {
  e.preventDefault();
  debugger;
  coverImageMain.src = newCover.value;
  coverTitleMain.innerHTML= newTitle.value;
  tagline1Main.innerHTML = newTagline1.value;
  tagline2Main.innerHTML= newTagline2.value;
  myCover = new Cover(coverImageMain.src, coverTitleMain.innerHTML, tagline1Main.innerHTML, tagline2Main.innerHTML);
  mySavedBooks.push(myCover);
  covers.push(myCover.cover);
  titles.push(myCover.title);
  descriptors.push(myCover.tagline1);
  descriptors.push(myCover.tagline2);
  form.reset();
  showMain();
};

function saveNew() {
  debugger;
  localStorage.setItem('items', JSON.stringify(mySavedBooks));
  localStorage.setItem('covers', JSON.stringify(covers));
  localStorage.setItem('titles', JSON.stringify(titles));
  localStorage.setItem('descriptors', JSON.stringify(descriptors));
}
