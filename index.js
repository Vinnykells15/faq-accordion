const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const active = document.querySelector(".faq-question.active");
    if (active && active !== question) {
      active.classList.remove("active");
      active.nextElementSibling.style.display = "none";
      active.querySelector(".toggle").textContent = "+";
    }

    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (answer) {
      answer.style.display = question.classList.contains("active")
        ? "block"
        : "none";
      question.querySelector(".toggle").textContent =
        question.classList.contains("active") ? "-" : "+";
    }
  });
});

<p>
Frontend Mentor offers realistic coding challenges to help developers
improve their frontend coding skills with projects in HTML, CSS, and
JavaScript. It's suitable for all levels and ideal for portfolio
building.
</p>

<p>
Yes, Frontend Mentor offers both free and premium coding challenges,
with the free option providing access to a range of projects suitable
for all skill levels.
</p>

<p>
Yes, you can use projects completed on Frontend Mentor in your
portfolio. It's an excellent way to showcase your skills to potential
employers!
</p>

<p>
The best place to get help is inside Frontend Mentor's Discord
community. There's a help channel where you can ask questions and seek
support from other community members.
</p>