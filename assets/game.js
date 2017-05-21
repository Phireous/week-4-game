$(document).ready(function(){

	var gemNumber = 0;
	var win = 0;
	var loss = 0;
	var randomNumber;
	var gem1Num;
	var gem2Num;
	var gem3Num;
	var gem4Num;


	function startGame(){
		randomNumber = Math.floor(Math.random() * (121 - 17)) + 17;
		$(".target-number").html(randomNumber);
		
		
		function boxNum() {
			gem1Num = Math.floor(Math.random() * (13 - 1) + 1);
			gem2Num = Math.floor(Math.random() * (13 - 1) + 1);
			gem3Num = Math.floor(Math.random() * (13 - 1) + 1);
			gem4Num = Math.floor(Math.random() * (13 - 1) + 1);

			if (gem1Num === gem2Num || gem1Num === gem3Num || gem1Num === gem4Num || gem2Num === gem3Num || gem2Num === gem4Num || gem3Num === gem4Num){
				boxNum();
			}
		};

		boxNum();

		console.log("box1=" + gem1Num + " box2=" + gem2Num + " box3=" + gem3Num + " box4=" + gem4Num);

		gemNumber = 0;
		$(".gem-number-area").html(gemNumber);
	};
	

	function compareNumber(){
		if(gemNumber === randomNumber){
			win++;
			$(".score").html("wins: " + win + "<br> losses: " + loss);
			startGame();
		};

		if(gemNumber > randomNumber){
			loss++;
			$(".score").html("wins: " + win + "<br> losses: " + loss);
			startGame();
		};
		
	};

	startGame();

	$(".button-1").on('click', function() {
		gemNumber = gemNumber + gem1Num;
		$(".gem-number-area").html(gemNumber);
		compareNumber();
	});

	$(".button-2").on('click', function() {
		gemNumber = gemNumber + gem2Num;
		$(".gem-number-area").html(gemNumber);
		compareNumber();
	});


	$(".button-3").on('click', function() {
		gemNumber = gemNumber + gem3Num;
		$(".gem-number-area").html(gemNumber);
		compareNumber();
	});

	$(".button-4").on('click', function() {
		gemNumber = gemNumber + gem4Num;
		$(".gem-number-area").html(gemNumber);
		compareNumber();
	});


	

});


