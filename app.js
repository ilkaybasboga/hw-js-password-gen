let form = document.getElementById("form");
let passWord = document.querySelector(".password");
let btn = document.querySelector(".btn");
let para = document.createElement("p");

btn.addEventListener("click", (e) => {
  passwordGen();

  e.preventDefault();
  setTimeout(() => {
    para.innerHTML = "";
    location.reload();
  }, 3000);
});

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let punctuation = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "~",
  "`",
  "|",
  "}",
  "{",
  "[",
  "]",
  ":",
  ";",
  "?",
  ">",
  "<",
  ",",
  ".",
  "/",
  "-",
  "=",
];

let aaa = "";
let flag1 = false;
let flag2 = false;

let passwordGen = () => {
  for (let i = 0; aaa.length < 10; i++) {
    let num = Math.floor(Math.random() * 3);

    if (num == 0 && flag1 == false) {
      for (let j = 0; j < 3; j++) {
        const k = Math.floor(Math.random() * 10);
        aaa += numbers[k];
      }
      flag1 = true;
    } else if (num == 1 && flag2 == false) {
      for (let j = 0; j < 2; j++) {
        const k = Math.floor(Math.random() * 29);
        aaa += punctuation[k];
      }
      flag2 = true;
    } else if (num == 2) {
      const k = Math.floor(Math.random() * 26);

      aaa += letters[k].toUpperCase();
    } else {
      const k = Math.floor(Math.random() * 26);

      aaa += letters[k];
    }
  }
  console.log(aaa);
  passWord.appendChild(para);
  para.innerHTML = aaa;
};
