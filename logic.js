// hide all pages except 1st
let pages = document.getElementById('pageContainer').children;
for(let i = 1; i< pages.length; i++){
  pages[i].style.display = 'none';
  // pages[i].style.opacity = 0;
}

// next btn event listener
let nextBtn = document.querySelectorAll('img');
for(let i = 0; i<nextBtn.length; i++){
  console.log(nextBtn[i]);
  nextBtn[i].addEventListener('click', takeToNextPage);
}

// take to next page
function takeToNextPage(e){
  // console.log(e.target);
  let currentPageId = e.target.parentElement.id;
  let nextPageId;

  currentPage = '.page'+currentPageId;

  if(currentPageId === '5'){
    nextPageId = '1';
  } else {
    nextPageId = String(Number(currentPageId) + 1);
  }

  document.querySelector(currentPage).style.display = 'none';

  currentPageId = nextPageId;
  currentPage = '.page'+currentPageId;

  document.querySelector(currentPage).style.display = 'block';
}