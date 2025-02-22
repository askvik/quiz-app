function checkAnswer(answer) {
  if (answer === "Paris") {
    document.getElementById("result").innerHTML = "✅ Correct!";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").innerHTML = "❌ Wrong! Try Again.";
    document.getElementById("result").style.color = "red";
  }
}
