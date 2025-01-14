const questions = document.querySelectorAll(".questions div");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const icons = question.querySelector(".icon");

    if (answer.style.display === "block") {
      answer.style.display = "none";
      icons.src = "/assets/images/icon-plus.svg";
    } else {
      answer.style.display = "block";
      icons.src = "/assets/images/icon-minus.svg";
    }
  });
});
