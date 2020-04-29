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

nextButton.addEventListener("click", next);
backButton.addEventListener("click", previous);

//text for each question in an array
var section3 =	[	"index 0",
					"What is the best memory you’ve made so far while in quarantine?",
					"How have you been practicing self-care and being alone during this time?",
					"What is the first thing you want to do post quarantine? Who is the first person you want to see?",
					"What are some things you have gained and/or lost as a result of the quarantine?",
					"What would you be doing right now if the world wasn’t on pause?",
					"What did quarantine make you realize about the importance of physical and emotional connections?",
					"What have you interpreted social distancing to mean?",
					"How do you keep yourself emotionally connected to others during this time?",
					"Have you reached out to people you are no longer in contact with? What has prompted you to do so if you have?",
					"Name three ways in which your communication and relationship with your partner has changed since quarantine began.",
					"What are some behaviors and habits you hope to continue after quarantine is lifted? What are some you hope to no longer continue?",
					"If you’ve spoken to people through dating apps, do you intend to continue the connection after quarantine ends?",
				];
var summary3 = "Quarantine has given us the time to reflect on the past and reimagine the future. It is important to take this period of time to not only think about our relationships with others, but also our relationship to ourselves. When answering these questions, think of how your answers may have differed before quarantine began. We are constantly changing as individuals and the ways in which we connect and love others evolves as a direct result as well. We hope these questions encourage you to reflect on the ways in which experiencing a global pandemic has affected the ways in which you love, but also how you want to love post-quarantine.";

function next() {
	//make sure we're not on the last section page (13)
    if (currentPage + 1 < sectionLen) {
        currentPage++;

	    //update the question screen
	    questionNumber.innerText = "#" + currentPage;
	    switch (currentPage) {
	    	case 1:
	    		questionText.innerText = section3[1];
	    		break;
	    	case 2:
	    		questionText.innerText = section3[2];
	    		break;
	    	case 3:
	    		questionText.innerText = section3[3];
	    		break;
	    	case 4:
	    		questionText.innerText = section3[4];
	    		break;
	    	case 5:
	    		questionText.innerText = section3[5];
	    		break;
	    	case 6:
	    		questionText.innerText = section3[6];
	    		break;
	    	case 7:
	    		questionText.innerText = section3[7];
	    		break;
	    	case 8:
	    		questionText.innerText = section3[8];
	    		break;
	    	case 9:
	    		questionText.innerText = section3[9];
	    		break;
	    	case 10:
	    		questionText.innerText = section3[10];
	    		break;
	    	case 11:
	    		questionText.innerText = section3[11];
	    		break;
	    	case 12:
	    		questionText.innerText = section3[12];
	    		break;
		}
	}

	else if (currentPage == sectionLen - 1) {
	//we're on the last question page (12), display section summary
		questionNumber.innerText = "...";
		questionText.style.fontSize = "1.3em";
		questionText.style.lineHeight = "120%";
		questionText.style.marginTop = "2%";
		questionText.innerText = summary3;

		nextButton.innerText = "finish";
		currentPage++;
	}

	else { //currentPage == sectionLen
		window.location.href = "finished.html";
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
				questionText.innerText = section3[1];
				break;
			case 2:
	    		questionText.innerText = section3[2];
	    		break;
	    	case 3:
	    		questionText.innerText = section3[3];
	    		break;
	    	case 4:
	    		questionText.innerText = section3[4];
	    		break;
	    	case 5:
	    		questionText.innerText = section3[5];
	    		break;
	    	case 6:
	    		questionText.innerText = section3[6];
	    		break;
	    	case 7:
	    		questionText.innerText = section3[7];
	    		break;
	    	case 8:
	    		questionText.innerText = section3[8];
	    		break;
	    	case 9:
	    		questionText.innerText = section3[9];
	    		break;
	    	case 10:
	    		questionText.innerText = section3[10];
	    		break;
	    	case 11:
	    		questionText.innerText = section3[11];
	    		break;
	    	case 12:
	    		questionText.innerText = section3[12];
	    		break;
		}

		//update navigation buttons
		nextButton.innerText = "next"; //change from "next section" bc we're not on the last page
	}

	else { //if currentPage == 1
		window.location.href = "section3.html";
	}
}