
const myform = document.querySelector("#GetJoke");
//console.log(myform);
myform.addEventListener("submit", async (evt) => {
     evt.preventDefault();
     const typeofjoke = evt.target.type.value;
     const categoryofjoke = evt.target.category.value;
     console.log(typeofjoke, categoryofjoke);
     let para = document.querySelector("p");


     let URL = `https://v2.jokeapi.dev/joke/${categoryofjoke}?type=${typeofjoke}`;
     console.log(URL);
     let response = await fetch(URL);
     console.log(response);
     let data = await response.json();
     console.log(data.joke);
     if (data.joke === undefined) {
          data.joke = "Sorry this combination doesnt have any jokes so try another combination";

          
          para.innerText = `${data.joke}`;
     }para.innerText = `${data.joke}`;
     
})

