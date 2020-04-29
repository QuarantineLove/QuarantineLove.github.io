var currentPage = 1;
var sectionLen = 13; //total number of questions + summary

var questionNumber = document.getElementById("questionNumber");
var questionText = document.getElementById("questionText");
var nextButton = document.getElementById("next");
var backButton = document.getElementById("previous");

nextButton.addEventListener("click", next);
backButton.addEventListener("click", previous);

//text for each question in an array
var section1 =	[	"index 0",
					"When you are sad, how do you prefer for people to cheer you up?",
					"What’s the ideal day you spend with a significant other?",
					"Describe a moment in which you have been most vulnerable in love.",
					"What typically leaves you unhappy in relationships?",
					"Do you find yourself giving more than you receive in relationships (or vice versa)? Which do you prefer?",
					"What does “Love” mean to you?",
					"Would you categorize yourself as an affectionate person?",
					"How can you tell someone loves you?",
					"How can someone tell that you love them?",
					"Who was the first person you said “I love you” to in a romantic way? How did you do it?",
					"What is something that brings you comfort?",
					"What’s the best kind of surprise for you?"
				];
var summary1 = "Your love language describes the way that you prefer giving and receiving love. The five main love languages are Words of Affirmation, Acts of Service, Gifts, Quality Time, and Physical Touch. In order for relationships to be successful, it is important for partners to know and understand each other’s love languages so that they can effectively express their love for one another. Think about what your answers to these questions reveal about your love language; which one do you seem to prefer?";


function next() {
	//make sure we're not on the last section page (13)
    if (currentPage + 1 < sectionLen) {
        currentPage++;

	    //update the question screen
	    questionNumber.innerText = "#" + currentPage;
	    switch (currentPage) {
	    	case 1:
	    		questionText.innerText = section1[1];
	    		break;
	    	case 2:
	    		questionText.innerText = section1[2];
	    		break;
	    	case 3:
	    		questionText.innerText = section1[3];
	    		break;
	    	case 4:
	    		questionText.innerText = section1[4];
	    		break;
	    	case 5:
	    		questionText.innerText = section1[5];
	    		break;
	    	case 6:
	    		questionText.innerText = section1[6];
	    		break;
	    	case 7:
	    		questionText.innerText = section1[7];
	    		break;
	    	case 8:
	    		questionText.innerText = section1[8];
	    		break;
	    	case 9:
	    		questionText.innerText = section1[9];
	    		break;
	    	case 10:
	    		questionText.innerText = section1[10];
	    		break;
	    	case 11:
	    		questionText.innerText = section1[11];
	    		break;
	    	case 12:
	    		questionText.innerText = section1[12];
	    		break;
		}
	}

	else if (currentPage == sectionLen - 1) {
	//we're on the last question page (12), display section summary
		questionNumber.innerText = "...";
		questionText.style.fontSize = "1.3em";
		questionText.style.lineHeight = "120%";
		questionText.style.marginTop = "2%";
		questionText.innerText = summary1;

		nextButton.innerText = "next section";
		currentPage++;
	}

	else { //currentPage == sectionLen
		window.location.href = "section2.html";
	}
}


function previous() {
	//make sure we're not on the first page
	if (currentPage - 1 >= 1) {
		currentPage--;

		//update the question screen
		questionNumber.innerText = "#" + currentPage;
		questionText.style.fontSize = "2em"; //reset the font size from summary page
		switch (currentPage) {
			case 1:
				questionText.innerText = section1[1];
				break;
			case 2:
	    		questionText.innerText = section1[2];
	    		break;
	    	case 3:
	    		questionText.innerText = section1[3];
	    		break;
	    	case 4:
	    		questionText.innerText = section1[4];
	    		break;
	    	case 5:
	    		questionText.innerText = section1[5];
	    		break;
	    	case 6:
	    		questionText.innerText = section1[6];
	    		break;
	    	case 7:
	    		questionText.innerText = section1[7];
	    		break;
	    	case 8:
	    		questionText.innerText = section1[8];
	    		break;
	    	case 9:
	    		questionText.innerText = section1[9];
	    		break;
	    	case 10:
	    		questionText.innerText = section1[10];
	    		break;
	    	case 11:
	    		questionText.innerText = section1[11];
	    		break;
	    	case 12:
	    		questionText.innerText = section1[12];
	    		break;
		}

		//update navigation buttons
		nextButton.innerText = "next"; //change from "next section" bc we're not on the last page
	}

	else { //if currentPage == 1
		window.location.href = "section1.html";
	}
}