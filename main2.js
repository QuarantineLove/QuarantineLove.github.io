/*
	The only differences between this file and main.js are the
	question array content, summary content, and links to next &
	previous section title pages
*/

var currentPage = 1;
var sectionLen = 13; //total number of questions + summary

var questionNumber = document.getElementById("questionNumber");
var questionText = document.getElementById("questionText");
var nextButton = document.getElementById("next");
var backButton = document.getElementById("previous");
var navigation = document.getElementsByClassName("navigate");

nextButton.addEventListener("click", next);
backButton.addEventListener("click", previous);

//text for each question in an array
var section2 =	[	"index 0",
					"How was conflict typically dealt with in your family growing up?",
					"What family member were you closest to growing up? Why?",
					"What was your parents' relationship like growing up? Do you see similar patterns in your own relationships?",
					"What was the most difficult part of your childhood?",
					"Who is your “safe base” in times of crisis?",
					"Do you find yourself most at peace when you are alone or with others? Describe one of these moments.",
					"What are your feelings around commitment?",
					"What’s the worst way you’ve hurt someone?",
					"What’s the worst way you've been hurt?",
					"What is your biggest regret? How would you have handled the event differently?",
					"What’s the biggest compromise you’ve had to make in a previous relationship?",
					"How have your ideas of love changed from when you were 16?"
				];
var summary2 = "Your attachment style describes the way that you formed your first relationship with your primary caregiver which has likely affected your relationships in your adult life. The main three attachment styles are secure attachment (form bonds with other easily, without fear of abandonment, and are willing to commit), avoidant attachment (very independent, don’t want to form dependence on others, take care of themselves and avoid intimacy), and finally anxious attachment ( generous and giving, fear partner doesn’t really love them/of abandonment, and happiest when around other people). Which attachment style resonates with you based on your answers?";

function next() {
	//make sure we're not on the last section page (13)
    if (currentPage + 1 < sectionLen) {
        currentPage++;

	    //update the question screen
	    questionNumber.innerText = "#" + currentPage;
	    switch (currentPage) {
	    	case 1:
	    		questionText.innerText = section2[1];
	    		break;
	    	case 2:
	    		questionText.innerText = section2[2];
	    		break;
	    	case 3:
	    		questionText.innerText = section2[3];
	    		break;
	    	case 4:
	    		questionText.innerText = section2[4];
	    		break;
	    	case 5:
	    		questionText.innerText = section2[5];
	    		break;
	    	case 6:
	    		questionText.innerText = section2[6];
	    		break;
	    	case 7:
	    		questionText.innerText = section2[7];
	    		break;
	    	case 8:
	    		questionText.innerText = section2[8];
	    		break;
	    	case 9:
	    		questionText.innerText = section2[9];
	    		break;
	    	case 10:
	    		questionText.innerText = section2[10];
	    		break;
	    	case 11:
	    		questionText.innerText = section2[11];
	    		break;
	    	case 12:
	    		questionText.innerText = section2[12];
	    		break;
		}
	}

	else if (currentPage == sectionLen - 1) {
	//we're on the last question page (12), display section summary
		questionNumber.innerText = "...";
		questionText.style.fontSize = "1.3em";
		questionText.style.lineHeight = "120%";
		questionText.style.marginTop = "0%";
		questionText.innerText = summary2;

		navigation[0].style.paddingTop = "10%";
		nextButton.innerText = "next section";
		currentPage++;
	}

	else { //currentPage == sectionLen
		window.location.href = "section3.html";
	}
}


function previous() {
	//make sure we're not on the first page
	if (currentPage - 1 >= 1) {
		currentPage--;

		//update the question screen
		questionNumber.innerText = "#" + currentPage;
		questionText.style.fontSize = "2em"; //reset the css from summary page
		questionText.style.marginTop = "10%";
		switch (currentPage) {
			case 1:
				questionText.innerText = section2[1];
				break;
			case 2:
	    		questionText.innerText = section2[2];
	    		break;
	    	case 3:
	    		questionText.innerText = section2[3];
	    		break;
	    	case 4:
	    		questionText.innerText = section2[4];
	    		break;
	    	case 5:
	    		questionText.innerText = section2[5];
	    		break;
	    	case 6:
	    		questionText.innerText = section2[6];
	    		break;
	    	case 7:
	    		questionText.innerText = section2[7];
	    		break;
	    	case 8:
	    		questionText.innerText = section2[8];
	    		break;
	    	case 9:
	    		questionText.innerText = section2[9];
	    		break;
	    	case 10:
	    		questionText.innerText = section2[10];
	    		break;
	    	case 11:
	    		questionText.innerText = section2[11];
	    		break;
	    	case 12:
	    		questionText.innerText = section2[12];
	    		break;
		}

		//update navigation buttons
		nextButton.innerText = "next"; //change from "next section" bc we're not on the last page
	}

	else { //if currentPage == 1
		window.location.href = "section2.html";
	}
}