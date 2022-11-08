
//choose a number and click, color of bg of number change to medium-grey. 
//Click on submit, being transferred to thank you page which chosen rating to be shown on thank you page. 

const boxRating = document.getElementById("box-rating");
const boxThanks = document.getElementById("box-thanks");
const submitBtn = document.getElementById("submit");
const ratingButtons = document.querySelectorAll(".btn");
const actualRating = document.getElementById("selected-rating");


submitBtn.addEventListener("click", () => {
    
        boxRating.classList.add("hidden")
        boxThanks.classList.remove("hidden")

        ratingButtons.forEach((ratingButton) => {
            ratingButton.addEventListener('click', () => {
                actualRating.innerText = ratingButton.innerHTML;
            })
        }) 
    
});



