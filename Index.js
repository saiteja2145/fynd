let userJson = [];
const updateBtn = document.getElementById("update");

const sunday = document.getElementById("sunday");
const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");
const saturday = document.getElementById("saturday");

const colorPallete = [
  "#69D2E7",
  "#A7DBD8",
  "#E0E4CC",
  "#F38630",
  "#FA6900",
  "#FE4365",
  "#FC9D9A",
  "#F9CDAD",
  "#C8C8A9",
  "#83AF9B",
  "#E8DDCB",
  "#CDB380",
  "#036564",
  "#033649",
  "#031634",
  "#351330",
  "#424254",
  "#64908A",
  "#E8CAA4",
  "#CC2A41",
];

const generateRandomColor = () => {
  let randomNumber = Math.floor(Math.random() * 20);
  return colorPallete[randomNumber];
};

const appendData = (day, data) => {
  const name = data.name.split(" ");
  const node = document.createElement("div");
  node.classList.add("card__data");
  node.style.backgroundColor = generateRandomColor();
  node.innerHTML = `<h3>${name[0][0] + (name[1][0] || "")}</h3>`;

  switch (day) {
    case "sunday":
      sunday.insertAdjacentElement("beforeend", node);
      break;
    case "monday":
      monday.insertAdjacentElement("beforeend", node);
      break;
    case "tuesday":
      tuesday.insertAdjacentElement("beforeend", node);
      break;
    case "wednesday":
      wednesday.insertAdjacentElement("beforeend", node);
      break;
    case "thursday":
      thursday.insertAdjacentElement("beforeend", node);
      break;
    case "friday":
      friday.insertAdjacentElement("beforeend", node);
      break;
    case "saturday":
      saturday.insertAdjacentElement("beforeend", node);
      break;
  }
};

const clearData = () => {
  sunday.innerHTML = "";
  monday.innerHTML = "";
  tuesday.innerHTML = "";
  wednesday.innerHTML = "";
  thursday.innerHTML = "";
  friday.innerHTML = "";
  saturday.innerHTML = "";
};

const checkForEmptyData = () => {
  console.log(sunday);
  if (sunday.children.length <= 0) {
    sunday.innerHTML = `<img src="./images/sad.png" class="img__notfound"></img>`;
  }
  if (monday.children.length <= 0) {
    monday.innerHTML = `<img src="./images/sad.png" class="img__notfound"></img>`;
  }
  if (tuesday.children.length <= 0) {
    tuesday.innerHTML = `<img src="./images/sad.png" class="img__notfound"></img>`;
  }
  if (wednesday.children.length <= 0) {
    wednesday.innerHTML = `<img src="./images/sad.png" class="img__notfound"></img>`;
  }
  if (thursday.children.length <= 0) {
    thursday.innerHTML = `<img src="./images/sad.png" class="img__notfound"></img>`;
  }
  if (friday.children.length <= 0) {
    friday.innerHTML = `<img src="./images/sad.png" class="img__notfound"></img>`;
  }
  if (saturday.children.length <= 0) {
    saturday.innerHTML = `<img src="./images/sad.png" class="img__notfound"></img>`;
  }
};

const renderData = (data) => {
  clearData();
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const year = document.getElementById("year").value;

  data = data.sort((a, b) => new Date(a.birthday) - new Date(b.birthday));

  for (const val of data) {
    let birthday = val.birthday.split("/");
    //swap numbers
    const tmp = birthday[0];
    birthday[0] = birthday[1];
    birthday[1] = tmp;
    birthday = birthday.join("/");
    const date = new Date(val.birthday);
    const day = days[date.getDay()];
    if (day !== undefined) {
      if (year && year.length === 4) {
        if (birthday.includes(year)) {
          appendData(day, val);
        }
      } else {
        appendData(day, val);
      }
    }
  }
  checkForEmptyData();
};

const updateData = () => {
  let jsonData = document.getElementById("text__area").value.trim();
  jsonData = eval(jsonData);
  if (typeof jsonData === "object") {
    userJson = jsonData;
    renderData(jsonData);
  }
};

updateBtn.addEventListener("click", updateData);
