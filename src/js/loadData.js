async function fetchAsync (url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
(async () => {
  const fact = await fetchAsync('https://uselessfacts.jsph.pl/random.json?language=en');
  document.getElementById("random").innerHTML = "fun fact for the day: " + fact.text;
  const activity = await fetchAsync('https://www.boredapi.com/api/activity');
  console.log(activity.activity);
  console.log(activity);
})();
// this is called an iife!


//rebase main; then force push to main

//NATIONAL PARK API KEY
//ex:
//https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=Y1QnWJT7Uf8W3cahI60b7JeYaiCatlGi0QHUN391
//Y1QnWJT7Uf8W3cahI60b7JeYaiCatlGi0QHUN391
//https://www.nps.gov/subjects/developer/api-documentation.htm