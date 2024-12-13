document.secret = "secretmessage1234";

function handleSubmit(event) {
  event.preventDefault();

  const element = document.createElement("li");

  element.innerHTML = document.getElementById("input").value;

  document.getElementById("list").appendChild(element);
}

document.getElementById("form").addEventListener("submit", handleSubmit);
