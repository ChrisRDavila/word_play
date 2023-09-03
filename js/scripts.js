// User Interface Logic
function handleForm(event) {
  event.preventDefault();
  let inputSentence = document.querySelector("input").value;
  let sentenceArray = inputSentence.split(" ");


  // create results heading
  const displayHeading = document.createElement("h2");
  displayHeading.append("Here a sentence you've created:");
  document.querySelector("form#sentence").reset();
  document.body.append(displayHeading);
  
  
  filterSentence = [];


  sentenceArray.forEach(function(element) {
    
    if (element.length >= 3) {
      filterSentence.push(element);
    }
  });  
    let revArray = filterSentence.reverse();
    console.log(revArray);
    let newSentence = revArray.join(" ");
    const paragraph = document.createElement("p");
    paragraph.append(newSentence);
    document.body.append(paragraph);
}


window.addEventListener("load", function() {
  document.querySelector("form#sentence").addEventListener("submit", handleForm);
});