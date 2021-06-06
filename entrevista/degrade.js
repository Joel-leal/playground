let numberCel = 255;
for (let i = 0; i < numberCel; i++) {
  let numberDivisionColor = (255 / numberCel) * i;
  let container = document.getElementById("container");
  let divItem = document.createElement("div");
  container.append(divItem);
  divItem.className = `a item-${i}`;
  divItem.style.backgroundColor = `rgb(${numberDivisionColor},${numberDivisionColor},${numberDivisionColor})`;
}
