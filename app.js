const btn = document.querySelector('.btn');
const getOneJoke = document.querySelector('.getOneJoke');

function oneJoke(url) {
  const ajax = new XMLHttpRequest();
  ajax.open('GET', url, true);
  ajax.onload = function() {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      // console.log(data.value.joke);
      getOneJoke.innerHTML = `
      <h3 class="mt-4 text-primary">Chuck Norris Says: </h3>
      <blockquote class="blockquote mt-4 text-primary">
        ${data.value.joke}
      </blockquote>
      `;
    }
  };
  ajax.onerror = function() {
    console.log('There was an error!');
  };
  ajax.send();
}

btn.addEventListener('click', function() {
  oneJoke('http://api.icndb.com/jokes/random');
  console.log('clicked');
});
