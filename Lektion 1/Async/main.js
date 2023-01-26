function transition(start, end, time, obj, prop, unit) {
  return new Promise((resolve, reject) => {
    const frameRate = 1000 / 60;
    const frames = Math.round(time / frameRate);
    const updatePerFrame = Math.abs(end - start) / frames;
    let val = start;

    const intervalId = setInterval(function () {
      val += updatePerFrame;
      obj[prop] = unit ? val + unit : val;
      if (val >= end) {
        obj[prop] = unit ? end + unit : end;
        clearInterval(intervalId);
        resolve();
      }
    }, frameRate);
  });
}

const boxElem = document.getElementById("box");
const moveBoxBtn = document.getElementById("moveBoxBtn");

moveBoxBtn.addEventListener("click", function () {
    transition(0, 200, 1200, boxElem.style, "left", "px").then(function () {
        boxElem.innerText = "Moving is done!";
        transition(0, 200, 1200, boxElem.style, "top", "px").then(function () {
            boxElem.innerText = "Moving is done AGAIN!";
        });

    })
});
