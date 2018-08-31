// hide all pages except 1st
let pages = document.getElementById('pageContainer').children;
for(let i = 1; i< pages.length; i++){
  pages[i].style.display = 'none';
}

var x = document.getElementById('bg-audio');

// next btn event listener
let nextBtn = document.querySelectorAll('img');
for(let i = 0; i<nextBtn.length; i++){
  console.log(nextBtn[i]);
  nextBtn[i].addEventListener('click', takeToNextPage);
}

// take to next page
function takeToNextPage(e){

  let currentPageId = e.target.parentElement.id || e.target.parentElement.parentElement.id;

  let nextPageId;

  currentPage = '.page'+currentPageId;

  if(currentPageId === '5'){
     // x.pause();
     x.currentTime = 0;
    nextPageId = '1';
  } else {
    nextPageId = String(Number(currentPageId) + 1);
  }

  document.querySelector(currentPage).style.display = 'none';

  currentPageId = nextPageId;
  currentPage = '.page'+currentPageId;

  document.querySelector(currentPage).style.display = 'block';
}
