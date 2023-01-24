/*
          Resultatet skall bli:
          backgroundColor
          listStyleImage
          WebkitTransition (notera stort W)
        */
camArray = [];
const styles = ["background-color", "list-style-image", "-webkit-transition"];
let camelStyle = [...styles];
camelStyle.forEach((text, index) => {
  camArray[index] = camelCase(text);
});
function camelCase(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) =>
      index === 0 ? letter.toLowerCase() : letter.toUpperCase()
    )
    .replace(/\s+/g, "")
    .replace("-", "")
    .replace("-", "");
}
console.log(camelCase("background-color"));
console.log(camArray + "   camarray");
