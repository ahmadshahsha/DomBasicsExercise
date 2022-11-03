
//  Dom basic exercise

const eMen = document.getElementByid("X-men");
// 2

const centered = document.getElementsByClassName ('center');

// 3
const batman = document.querySelector ('#batman');

// 4
const h3s = document.querySelectorAll ('h3');

// 5a
const h1 = document.querySelector (`h1`);
// 5b
h1.innterText = 'The best animated sperhero TV showe Ever!';

// 6a
const honorableMention = document.getElementById('honorable-mentions')

// 6b

honorableMention.innerHTML = `<p>OTHER GREAT SHOWS</>`;
// 7a
const aTag = document.querySelector('a');

// 7b
aTag.href = "# ULR";

// or
aTag.innerHTML = '<a href="https://screenrant.com/best-animated-superhero-comic-book-shows-ever/">The Best Animated Superhero TV Shows Ever</a>';

// 8
h1.classList.add(`background`, `text-color`);

// 9
h1.classList.remove(`background`);

// 10a
const h4 = document.createElement('h4');

// 10b
h4.innerText = 'Is avaanture;'

// 10c
const body = document.querySelector('body');
body.prepend(h4);

// 11a
const h5 = document.createElement.createElement('5');

//  11b
h5.innerText = "Heros in a half sheel turtle Power!";

// 11c
aTag.insertAdjacentElement('afterend', h5);

// 12
const superman = document.querySelector('ul>li');
superman.remove();

// or
// const superman = document.querySelector('ul>li').remove();

// Bonus

// 13a
const divs = document.querySelectorAll('divs');

// 13b
for (i = 0 ; i < divs.length; i++){

    divs[i].classList.toggle (`background`);
}
//  or
// for (d of divs){
//     d.classList.toggle ('background');
// }

// 14a
/* for (i = 0; i < avengers.length; i++){
    const spanLoop = document.createElement(`span`);
    spanLoop.innerText = `${avengers[i]} `;
    body.append(spanLoop);
} */

// OR

for (a of avengers){
    const spanLoop = document.createElement(`span`);
    spanLoop.innerText = `${a} `;
    body.append(spanLoop);
}








