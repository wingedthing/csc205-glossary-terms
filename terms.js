/*To use: 
1. Go to Jones & Bartlett site for your ebook - Essentials of Computer Organization & Architecture, Fifth Edition - 
2. Open dev tools in the browser with ctrl+shift+i 
3. Go to the console tab in dev tools, paste in the code, and press enter (ctrl+enter if in multiline mode).

Should take a few seconds to clear the screen and display all glossary terms formatted for easy copying with ctrl+c 
*/

const glossaryButton = document.getElementById('glossary-panel');
glossaryButton.click();
const body = document.querySelector('body');
const html = document.querySelector('html');

const makeDocFrag = tagString => {
  let range = document.createRange();
  return range.createContextualFragment(tagString);
};

setTimeout(function () {
  const headingArray = Array.from(document.querySelectorAll(".heading"));
  const descriptionArray = Array.from(document.querySelectorAll(".description"));
  body.innerHTML = '';
  html.style.overflow = 'visible';
  
  headingArray.forEach((el, i) => {
    body.appendChild(makeDocFrag(`
    <div>
	    <p><b>${el.innerText}</b></p>
	    <p>${descriptionArray[i].innerText}</p>
	    <br>
    </div`));
  });

}, 2000);


