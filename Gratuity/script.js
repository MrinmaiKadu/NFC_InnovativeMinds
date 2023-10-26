const calculate = document.querySelector('.calculate');
const finalAnswer = document.querySelector('#finalAnswer');

calculate.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent the form from submitting and the page from refreshing
  
  const baseDa = parseFloat(document.querySelector('#baseDa').value);
  const serviceYears = parseFloat(document.querySelector('#serviceYears').value);
  const option1 = document.querySelector('#option1').checked;

  let result = '';
  if (option1) {
    result = `Gratuity for your Service: ${((baseDa * serviceYears * 15) / 26).toFixed(2)}`;
  } else {
    result = `Gratuity for your Service: ${((baseDa * serviceYears * 15) / 30).toFixed(2)}`;
  }

  // Set the inner HTML of finalAnswer
  finalAnswer.innerHTML = result;
});
