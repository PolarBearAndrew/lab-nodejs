/************************************PROBLEM 1****************************************/

/**
 * When you click the "problem 1" button:
 * - Get the text from the element with id 'please-move-me'
 * - Add that text to the element with id 'move-the-text-here'
 * - Remove the element with id 'please-move-me' from the page
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
 */
const problem1 = () => {
  // @todo finish this callback.
  document.querySelector('#move-the-text-here').textContent = document.querySelector('#please-move-me').textContent;
  document.querySelector('#please-move-me').remove();
};

/************************************PROBLEM 2****************************************/

/**
 * When you click the "problem 2" button:
 * 1. Start with a variable that is an empty string
 * 2. Get the text content of every h6 element on the page and add it
 *    to the string you created in step 2.
 * 3. Add the text from step 2 to the element with id 'the-div-below'
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
 * @see https://www.samanthaming.com/tidbits/15-4-ways-to-combine-strings/
 */
const problem2 = () => {
  // @todo finish this callback.
  let newText = '';
  document.querySelectorAll('h6').forEach((item) => {
    newText += item.textContent;
  });
  document.querySelector('#the-div-below').textContent = newText;
  //console.log(newText);
};

/*************************************PROBLEM 3***************************************/

/**
 * When you type text in the "Put text here" input (#what-you-typed) THEN click "Problem 3":
 *    - The element with id 'what-you-typed' gets the text from the input
 *      you typed in.
 *    - The input you typed in is now empty.
 * @see https://www.w3schools.com/Jsref/prop_text_value.asp
 */
const problem3 = () => {
  // @todo finish this callback.
  //console.log(document.getElementById('type-some-text').value);
  document.querySelector('#what-you-typed').textContent = document.getElementById('type-some-text').value;
  document.getElementById('type-some-text').value = '';
};

/*************************************PROBLEM 4***************************************/

/**
 * This requires clicking the "Problem 4" button multiple times to change box color.
 *
 * The box that changes color has the class .color-change-box, but there are multiple
 *   boxes with that class so you'll need to find a way to target it WITHOUT editing
 *   anything in index.html.
 *
 * When you click 'Problem 4':
 *   - if the color change box has class `.bg-danger` (red), that class should instead be .bg-warning (yellow)
 *   - if the color change box has class `.bg-warning` (yellow), that class should instead be .bg-danger (red)
 *   - the box should never have both classes
 *
 *   @see https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
 *   @see https://www.w3schools.com/howto/howto_js_toggle_class.asp
 */
const problem4 = () => {
  // @todo finish this callback.
  //document.getElementById('use-me-in-problem-4').getElementsByClassName('color-change-box')[0].remove();
  document
    .getElementById('use-me-in-problem-4')
    .getElementsByClassName('color-change-box')[0]
    .classList.toggle('bg-danger');
};

/*********************************PROBLEM 5*****************************************/

let theRandomString = '';
const postedRandomWord = document.querySelector('#posted-random-word');
const randomizerStatus = document.querySelector('#randomizer-status');

/**
 * We've already created variables above for `theRandomString` (currently an
 * empty string) and two of the DOM elements that will be used in problem5a()
 * and problem5b()
 *
 * 1. The first line of this function should be
 *   - `theRandomString = randomString()`
 * 2. Send thisRandomString to console.log()
 *
 * When you click "Problem 5a (make random string)" this callback fires. It should:
 * - Update `randomizerStatus` textContent to say
 *      'Created random string, press the Problem 5b button to post'
 * - Clear the textContent of `postedRandomWord`
 *
 * This should only require functions you've already used before, but this and 5b
 * demonstrate using scope
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Scope
 *
 * If the above isn't clear (it may not be, it's weird!), the "completed" example should
 * help.
 */
const problem5a = () => {
  // @todo finish this callback.
  theRandomString = randomString();
  console.log(theRandomString);
  randomizerStatus.textContent = 'Created random string, press the Problem 5b button to post';
  postedRandomWord.textContent = '';
};

/**
 * When the "Problem 5b (post random string)" button is clicked:
 * 1. Clear `randomizerStatus` textContent
 * 2. `postedRandomWord` textContent should be the value of `theRandomString`
 */
const problem5b = () => {
  // @todo finish this callback.
  randomizerStatus.textContent = '';
  postedRandomWord.textContent = theRandomString;
};

/** *************** STRETCH *************** */

/** *********************** PROBLEM 6 ************************************* */

/**
 * Like problem 2, get every h6, but render each h6 content as an html list.
 * - The ul tag should have the class `.list-group`
 * - The li tags should have the class `.list-group-item`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
 */
const problem6 = () => {
  // @todo finish this callback.
  var ul = document.createElement('ul');
  document.querySelectorAll('h6').forEach((item) => {
    //console.log(item.innerHTML);
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(item.textContent));
    ul.appendChild(li);
  });
  document.getElementById('list-container-6').innerHTML = '';
};

const totalBox = 4;
const currIdx = 0;

const problem9_getBoxIdByIdx = (idx) => {
  return;
};

const problem9_reset = () => {
  curr = 0;

  for (let i = 0; i < totalBox; i += 1) {
    document.getElementById(problem9_getBoxIdByIdx(i)).innerHTML = '';
  }
};

// const input = document.getElementById('moving-text').value;
// if (!input) {
//   // alert('Please enter text');
//   return;
// }

// if (curr >= end) {
//   problem9_reset();
// }

const problem9 = () => {
  const list = ['andrew', 'is', 'super', 'shiba'];

  list.forEach((str, i) => {
    const newMovingTextSpan = document.createElement('span');
    newMovingTextSpan.setAttribute('id', 'moving-text-span');
    newMovingTextSpan.textContent = str;
    document.getElementById(problem9_getBoxIdByIdx(`box-${i + 1}`)).innerHTML = ele;
  });
};

// document.getElementById('moving-text').value = '';

//   currIdx += 1;
