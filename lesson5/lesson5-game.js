let figure = {};
function drawChess(notEmpty = false) {
  const letters = ",A,B,C,D,E,F,G,H,".split(",");
  const numbers = ",1,2,3,4,5,6,7,8,".split(",").reverse();
  const block = document.createElement("table");
  let line;
  let column;
  for (let i = 0; i <= 9; i++) {
    line = document.createElement("tr"); //tr-строка
    for (let j = 0; j <= 9; j++) {
      column = document.createElement("td");
      if (i === 0 || i === 9 || j === 0 || j === 9) {
        column.innerHTML = letters[j] || numbers[i];
      } else {
        column.className = i % 2 == j % 2 ? "white" : "black";
      }
      line.appendChild(column);
    }
    block.appendChild(line);
  }
  console.log(block);
  return block;
}
const mainBlock = document.querySelector(".main-block");
mainBlock.appendChild(drawChess());
