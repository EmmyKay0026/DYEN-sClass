const getUser = async () => {
  // console.log("I have ordered from table 3");
  try {
    const response = await fetch("https://fakestoreapi.com/users");
    // console.log(response);

    const users = await response.json();
    console.log(users[1]);
  } catch (error) {
    console.log("An error ocurred:", error);
  }

  // console.log("Function");
};
// console.log("I am from table 4");

getUser();
// jnsdjbnviadbnvndvn More Code
// /next
