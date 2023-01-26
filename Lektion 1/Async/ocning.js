// 1
const wait = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve();
  }, 500);
});

wait.then(function () {
  console.log("We waited");
});

// 2
function greaterThan10(number) {
  return new Promise(function (resolve, reject) {
    if (number > 10) {
      resolve();
    } else {
      reject();
    }
  });
}
greaterThan10(12).then(function () {
  console.log("Success!");
});

greaterThan10(5).catch(function () {
  console.log("Fail!");
});

//3
function makeUpperCase(string) {
  return new Promise((resolve, reject) => {
    if (typeof string === "string") {
      upperCaseString = string.toUpperCase();
      resolve(upperCaseString);
    } else {
      reject("not a string");
    }
  });
}
let text = "Banan";
makeUpperCase(text).then(function (b) {
  console.log(b);
});

makeUpperCase(5).catch(function (a) {
  console.log(a);
});

// 4
function delay(milliseconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}
delay(500).then(function () {
  console.log("We waited AGAIN");
});

// 5

const hayStack = [
  {
    id: 0,
    name: "STRAW",
  },
  {
    id: 1,
    name: "GRASS",
  },
  {
    id: 2,
    name: "NEEDLE",
  },
  {
    id: 3,
    name: "STICK",
  },
];

function findByName(name, arrayWithObjects) {
  return new Promise((resolve, reject) => {
    const item = arrayWithObjects.find(function (item) {
      return item.name === name;
    });
    if (typeof item !== "undefined") {
      resolve(item);
    } else {
      reject("Matching object not fond");
    }
  });
}

findByName("NEEDLE", hayStack).then(function (results) {
  console.log(results);
});

findByName("FOOTBALL", hayStack).catch(function (error) {
  console.log(error);
});

// 6
