//Part 1: Variables & Conditionals
document.getElementById("greetBtn").addEventListener("click", function() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let message = "";

  if (age < 18) {
    message = `Hey ${name}, you are still young!`;
  } else {
    message = `Hello ${name}, you're an adult now!`;
  }

  document.getElementById("greeting").textContent = message;
});

//Part 2: Functions

// A function to add numbers
function showTotal() {
  let n1 = document.getElementById('num1').value;
  let n2 = document.getElementById('num2').value;
  document.getElementById("calcResult").innerText = 'Result:' + (Number(n1) + Number(n2));
  
}

//Part 3: Loops

// Countdown example using a for loop
document.getElementById("countdownBtn").addEventListener("click", function() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear old list

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
});

// Array loop example
document.getElementById("listFruitsBtn").addEventListener("click", function() {
  let fruits = ["Apple", "Banana", "Strawberry", "Pineapple"];
  let list = document.getElementById("fruitsList");
  list.innerHTML = "";

  fruits.forEach(function(fruit) {
    let li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
});

// Part 4: DOM Manipulation

// Change background color
document.getElementById("changeColorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "#f9f9f9" : "lightblue";
});

// Toggle secret text
document.getElementById("toggleTextBtn").addEventListener("click", function() {
  let secret = document.getElementById("secretText");
  if (secret.style.display === "none") {
    secret.style.display = "block";
  } else {
    secret.style.display = "none";
  }
});
