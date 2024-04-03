const bulbImg = document.getElementById("bulb-img");
const turnOn = document.getElementById("turn-on");
const turnOff = document.getElementById("turn-off");
const bulbStatus = document.getElementById("bulb-status");

turnOn.addEventListener("click", () => {
  bulbImg.src = "../assets/onbulb.jpg";
  bulbStatus.innerHTML = `
  <span>To turn off the bulb, click the "Turn off button"</span>
  `;
  // bulbStatus.innerText = "The bulb is on.";

  // console.log(bulbImg.src);
  console.log("the bulb is on");
});

turnOff.addEventListener("click", () => {
  bulbImg.src = "../assets/goodbulb.jpg";
  bulbStatus.innerHTML = "The bulb is off.";

  console.log("the bulb is off");
});

// const applyBtn = document.getElementById("apply-btn");

// // console.log(applyBtn);

// applyBtn.addEventListener("click", () => {
//   console.log("Apply button was clicked");
// });
