let capitals;

function setup() {
  noCanvas();
  loadJSON('capitals.json', gotCapital);

  let button = select('#button');
  // Demonstrating anonymous function
  button.mousePressed(function() {
    let span = createSpan(random(capitals))
    // Demonstrating chaining
//     span.style('font-size','64px').parent('capitals');
  });
}

function gotCapital(data) {
  console.log(data);
  capitals = data.capitals;
}
