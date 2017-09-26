var correctAnswer = 0;
var wrongAnswer = 0;
var unanswered = 0;


var timeLeft = 30;
var intervalId;

function initialScreent() {
	

	var a = $("<button>");
	a.addClass=("start");
	a.attr("data-start", "Start");
	a.html("Start");
	$("#start").append(a);
	console.log("correct");
}
initialScreent();

function run() {
    intervalId = setInterval(decrement, 1000);

}

function stop() {
    clearInterval(intervalId);
}

function decrement() {
    timeLeft--;
    $("#timeout").html("<p><h2>&#9200; Time Remaining: " + timeLeft + " seconds</h2></p>");

    if (timeLeft === 0) {
        stop();

        alert("Time Up!")

        $(".container").remove();
        $("#timeout").empty();
		$("#result").html("<p>All Done!" + "</p>" + "<p>Correct Answers: " + correctAnswer + "</p>"
						+ "<p>Incorrect Answers: " + wrongAnswer + "</p>"); 

    }
}


$("#start").on("click", function(event) {
	run();
	decrement();

	$("#start").remove();
	$(".container").text();


})





$("#questionOne-one").one("click", function(event) {
	correctAnswer++;
	console.log("correct");
});

$("#questionOne-two, #questionOne-three, #questionOne-four").one("click", function(event) {
	wrongAnswer++;
	console.log("wrong");
});

$("#questionTwo-three").one("click", function(event) {
	correctAnswer++;
	console.log("correct");
});

$("#questionTwo-one, #questionTwo-two, #questionTwo-four").one("click", function(event) {
	wrongAnswer++;
	console.log("wrong");
});

$("#questionThree-two").one("click", function(event) {
	correctAnswer++;
	console.log("correct");
});

$("#questionThree-one, #questionThree-three, #questionThree-four").one("click", function(event) {
	wrongAnswer++;
	console.log("wrong");
});

$("#questionFour-four").one("click", function(event) {
	correctAnswer++;
	console.log("correct");
});

$("#questionFour-one, #questionFour-two, #questionFour-three").one("click", function(event) {
	wrongAnswer++;
	console.log("wrong");
});

$("#questionFive-two").one("click", function(event) {
	correctAnswer++;
	console.log("correct");
});

$("#questionFive-one, #questionFive-three, #questionOne-four").one("click", function(event) {
	wrongAnswer++;
	console.log("wrong");
});

