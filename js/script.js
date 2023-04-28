'use strict';
function titleClickHandler(event){

  event.preventDefault();
  
  const clickedElement = this;

 
  /* [DONE] remove class 'active' from all article links  */    
  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */ 
  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active'); 


  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts article.active');
  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  console.log('articleSelector:', articleSelector);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  console.log('targetArticle:', targetArticle);

  /* [DONE] add class 'active' to the correct article */
  targetArticle.classList.add('active');

}

function generateTitleLinks(){

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  
  /* for each article */
  let html = ''; //'<li><a href="#article-1"><span>Article 1</span></a></li><li><a href="#article-2"><span>Article 2</span></a></li>'

  const articles = document.querySelectorAll(optArticleSelector);
  for(let article of articles){

    /* get the article id */
    const articleId = article.getAttribute('id'); //article-2

    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML; //Article 2

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>'; //'<li><a href="#article-2"><span>Article 2</span></a></li>'
    console.log('Created HTML code:', linkHTML);

    /* insert link into titleList */
    html = html + linkHTML;
  }

  titleList.innerHTML = html;
}


const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

generateTitleLinks();

const links = document.querySelectorAll('.titles a');
for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

function generateTags(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log('articles:', articles);

  /* START LOOP: for every article: */
  for(let article of articles){

    /* find tags wrapper */
    
    const tagWrapper = article.querySelector(optArticleTagsSelector);

    /* make html variable with empty string */

    let html = '';

    /* get tags from data-tags attribute */
    
    const articleTags = article.getAttribute('data-tags');
    console.log('articleTags:', articleTags);

    /* split tags into array */
    
    const articleTagsArray = articleTags.split(' ');

    /* START LOOP: for each tag */
    
      for(let tag of articleTagsArray){
        console.log('Tag:', tag);
      
        /* generate HTML of the link */
      
      const linkHTML = '<li><a href="#tag-' + articleTagsArray + ' ' + '>' + articleTagsArray + '</a></li>';
      console.log('Generated HTML:', linkHTML);
      
      /* add generated code to html variable */
      
      html = html + linkHTML;
      
    /* END LOOP: for each tag */
  }
    /* insert HTML of all the links into the tags wrapper */

    tagWrapper.innerHTML = html;

  /* END LOOP: for every article: */
}
}
generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */

  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');

  /* make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace('#tag-', '');

  /* find all tag links with class active */

  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');

  /* START LOOP: for each active tag link */

  for(let activeTags of tagActiveLinks){
    

    /* remove class active */

  /* END LOOP: for each active tag link */

  }

  /* find all tag links with "href" attribute equal to the "href" constant */



  /* START LOOP: for each found tag link */

  

    /* add class active */



  /* END LOOP: for each found tag link */



  /* execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-tags~="' + tag + '"]');

}

function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */
  

    /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();
