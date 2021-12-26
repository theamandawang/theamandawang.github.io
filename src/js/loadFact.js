// const chuckJoke = fetch('https://api.chucknorris.io/jokes/random').then(res => res.json()).then(data => console.log(data.value));
async function fetchAsync () {
    const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
    const data = await response.json();
    const fact = data.text;
    return fact;
  }
(async () => {
    console.log(await fetchAsync());
    document.getElementById("random").innerHTML = "fun fact for the day: " + await fetchAsync();
})();
// this is called an iife!
