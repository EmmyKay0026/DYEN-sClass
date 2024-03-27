const root = document.getElementById("root");
const root2 = document.getElementById("root2");

// const fname = prompt("What is your first name");
// const lname = prompt("What is your last name");

function greet(name1, name2) {
  root.innerText = `Hello Web development students, I am ${name1}  ${name2}`;
  // root2.innerText = `Hello Web development students, I am `;
}

// greet("Faith", "Frank");
// greet("Mary", "Ola");

// greet(fname, lname);
// greet();

function add(num1, num2) {
  const answer = num1 + num2;

  return answer;
}

add(2, 4);
