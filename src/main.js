// Create variables targetting the relevant DOM elements here 👇

var coverImageMain = document.querySelector('.cover-image');
var coverTitleMain = document.querySelector('.cover-title');
var tagline1Main = document.querySelector('.tagline-1');
var tagline2Main = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
var savedView = document.querySelector('.saved-view');
var makeNewButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var makeNewForm = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var saveButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
document.addEventListener('DOMContentLoaded', randomPoster);
randomCoverButton.addEventListener('click', randomPoster);
makeNewButton.addEventListener('click', showMakeForm);
homeButton.addEventListener('click', showMain);
viewSavedButton.addEventListener('click', showSaved);
// Create your eent handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomPoster() {
  coverImageMain.src = covers[getRandomIndex(covers)];
  coverTitleMain.innerHTML = titles[getRandomIndex(titles)];
  tagline1Main.innerHTML = descriptors[getRandomIndex(descriptors)];
  tagline2Main.innerHtml = descriptors[getRandomIndex(descriptors)];

};

function showMakeForm() {
  debugger;
  makeNewForm.classList.remove('hidden');
  homeView.classList.add('hidden');
  saveButton.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  makeNewButton.classList.add('hidden');
  savedView.classList.add('hidden');

};

function showSaved() {
  savedView.classList.remove('hidden');
  homeView.classList.add('hidden');
  saveButton.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  makeNewForm.classList.add('hidden');
  makeNewButton.classList.remove('hidden');

};

function showMain() {
  homeView.classList.remove('hidden');
  makeNewForm.classList.add('hidden');
  homeButton.classList.add('hidden');
  saveButton.classList.remove('hidden');
  randomCoverButton.classList.remove('hidden');
  savedView.classList.add('hidden');
  makeNewButton.classList.remove('hidden');

}
