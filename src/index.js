import './styles.css';

import { multiply, isSmallerThan10 } from './1_basics';
import { guardMove } from './2_mockFn';
import { generatePassword } from './3_mockDep';
import { fetchJoke } from './4_mockFetch';

document.getElementById('app').innerHTML = `
<h1>Intro to Testing with Jest</h1>
<div>
  Playground to practice Jest. 

  You can see all functions being called in this page.

  <br/>

  Instructions:
  <ol>
    <li>Fork this sandbox</li>
    <li>Click the Github icon in the sidebar to create a repo</li>
    <li>In the repo, create a new branch</li>
    <li>Write the tests there and send me the PR.</li>
  </ol>  
</div>
`;

async function init() {
  console.log('multiply', multiply(3, 4));

  console.log('isSmallerThan10 - 1', isSmallerThan10(1));
  console.log('isSmallerThan10 - 20', isSmallerThan10(20));

  guardMove(() => {
    console.log('Im walking!');
  }, 'walk');

  guardMove(() => {
    console.log('I was not logged.');
  }, 'swim');

  console.log(await generatePassword(5));
  console.log(await generatePassword(5, 'aaa'));

  // Random joke
  console.log(await fetchJoke());
  // Jokes that contain "what"
  console.log(await fetchJoke('what'));
}

init();
