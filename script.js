const ratings = document.querySelectorAll(".button");
const submit = document.querySelector(".submit");
const box = document.querySelector(".box");
const thankYouBox = document.querySelector(".thank-you-box");
const choice = document.querySelector(".choice");

let score = 0;
let previousIndex = null;

ratings.forEach((rating, i) => {
	console.log(rating);
	rating.addEventListener("click", () => {
		if (previousIndex !== null) {
			ratings[previousIndex].classList.remove("button-active");
		}
		score = i + 1;
		rating.classList.add("button-active");
		previousIndex = i;
		console.log("score " + score);
		console.log("previousIndex " + previousIndex);
	});
});

const submitClick = () => {
	if (score > 0) {
		box.classList.add("hide");
		thankYouBox.classList.remove("hide");
		choice.innerHTML = ` ${score}`;
	} else alert("prosze wybrac liczbe");

	// box.classList.add("hide");
	// thankYouBox.classList.remove("hide");
};
submit.addEventListener("click", submitClick);
