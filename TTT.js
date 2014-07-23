var TTTapp = angular.module("TTT",[]);

// Created our controller
TTTapp.controller("TTTcontroller",function($scope){

	// REDO BOXES USING FOR LOOPS!!!
	// MUST FIX CATSGAME ISSUE = running else when it shouldn't
	// maybe also smaller catsgame testing with loop

	// Created all the boxes as objects
	$scope.boxes = [
			{owner: "", boxes:[
				{owner:"",ID:"box1"},{owner:"",ID:"box2"},{owner:"",ID:"box3"},
				{owner:"",ID:"box4"},{owner:"",ID:"box5"},{owner:"",ID:"box6"},
				{owner:"",ID:"box7"},{owner:"",ID:"box8"},{owner:"",ID:"box9"}	
			]},
			{owner: "", boxes:[
				{owner:"",ID:"box10"},{owner:"",ID:"box11"},{owner:"",ID:"box12"},
				{owner:"",ID:"box13"},{owner:"",ID:"box14"},{owner:"",ID:"box15"},
				{owner:"",ID:"box16"},{owner:"",ID:"box17"},{owner:"",ID:"box18"}
			]},
			{owner: "", boxes:[
				{owner:"",ID:"box19"},{owner:"",ID:"box20"},{owner:"",ID:"box21"},
				{owner:"",ID:"box22"},{owner:"",ID:"box23"},{owner:"",ID:"box24"},
				{owner:"",ID:"box25"},{owner:"",ID:"box26"},{owner:"",ID:"box27"}
			]},
			{owner: "", boxes:[
				{owner:"",ID:"box28"},{owner:"",ID:"box29"},{owner:"",ID:"box30"},
				{owner:"",ID:"box31"},{owner:"",ID:"box32"},{owner:"",ID:"box33"},
				{owner:"",ID:"box34"},{owner:"",ID:"box35"},{owner:"",ID:"box36"}
			]},
			{owner: "", boxes:[
				{owner:"",ID:"box37"},{owner:"",ID:"box38"},{owner:"",ID:"box39"},
				{owner:"",ID:"box40"},{owner:"",ID:"box41"},{owner:"",ID:"box42"},
				{owner:"",ID:"box43"},{owner:"",ID:"box44"},{owner:"",ID:"box45"}
			]},
			{owner: "", boxes:[
				{owner:"",ID:"box46"},{owner:"",ID:"box47"},{owner:"",ID:"box48"},
				{owner:"",ID:"box49"},{owner:"",ID:"box50"},{owner:"",ID:"box51"},
				{owner:"",ID:"box52"},{owner:"",ID:"box53"},{owner:"",ID:"box54"}
			]},
			{owner: "", boxes:[
				{owner:"",ID:"box55"},{owner:"",ID:"box56"},{owner:"",ID:"box57"},
				{owner:"",ID:"box58"},{owner:"",ID:"box59"},{owner:"",ID:"box60"},
				{owner:"",ID:"box61"},{owner:"",ID:"box62"},{owner:"",ID:"box63"}
			]},
			{owner: "", boxes:[
				{owner:"",ID:"box64"},{owner:"",ID:"box65"},{owner:"",ID:"box66"},
				{owner:"",ID:"box67"},{owner:"",ID:"box68"},{owner:"",ID:"box69"},
				{owner:"",ID:"box70"},{owner:"",ID:"box71"},{owner:"",ID:"box72"}
			]},
			{owner: "", boxes:[
				{owner:"",ID:"box73"},{owner:"",ID:"box74"},{owner:"",ID:"box75"},
				{owner:"",ID:"box76"},{owner:"",ID:"box77"},{owner:"",ID:"box78"},
				{owner:"",ID:"box79"},{owner:"",ID:"box80"},{owner:"",ID:"box81"}
			]}
	];

	// Variable for the Player
	$scope.Player_Name = "Player 1";

	// Dynamic Player Names - this is the variable they change
	$scope.Player_Names = ["Player 1", "Player 2"]

	// Function to claim ownership over squares
	$scope.claim = function(BigBox, SmallBox, small_owner){

		// First checks if space is owned
		if (small_owner == "P1" || small_owner == "P2"){
			alert("Nope, pick another spot bro");
		} else {
			// Then gives small_ownership based on Player and changes turns
			if ($scope.Player_Name == $scope.Player_Names[0]){
				SmallBox.owner = "P1";
				$scope.Player_Name = $scope.Player_Names[1];
				$scope.winner(BigBox);
			} else {
				SmallBox.owner = "P2";
				$scope.Player_Name = $scope.Player_Names[0];
				$scope.winner(BigBox);
			}
		}
	};

	//Winner of the Big Boxes
	$scope.winner = function(BigBox){

		// Each of the small box owners as variable to make the comparison logic easier
		var box1 = BigBox.boxes[0];
		var box2 = BigBox.boxes[1];
		var box3 = BigBox.boxes[2];
		var box4 = BigBox.boxes[3];
		var box5 = BigBox.boxes[4];
		var box6 = BigBox.boxes[5];
		var box7 = BigBox.boxes[6];
		var box8 = BigBox.boxes[7];
		var box9 = BigBox.boxes[8];

		// Winner possibilities
		var winners = [
			[box1,box2,box3],
			[box4,box5,box6],
			[box7,box8,box9],
			[box1,box4,box7],
			[box2,box5,box8],
			[box3,box6,box9],
			[box1,box5,box9],
			[box3,box5,box7]
		];

		// Big Squares Winner Selection
		for (var i=0; i<winners.length; i++){
			if ((winners[i][0].owner == "P1" || winners[i][0].owner == "P2") && (winners[i][0].owner == winners[i][1].owner) && (winners[i][1].owner == winners[i][2].owner)){
				box1.owner = winners[i][0].owner;
				box2.owner = winners[i][0].owner;
				box3.owner = winners[i][0].owner;
				box4.owner = winners[i][0].owner;
				box5.owner = winners[i][0].owner;
				box6.owner = winners[i][0].owner;
				box7.owner = winners[i][0].owner;
				box8.owner = winners[i][0].owner;
				box9.owner = winners[i][0].owner;
				BigBox.owner = winners[i][0].owner;
				big_winner();
			} else {
				console.log("numero dos");
				winCats(box1,box2,box3,box4,box5,box6,box7,box8,box9);
			}
		};
	};

	// Catsgame logic
	function winCats(box1,box2,box3,box4,box5,box6,box7,box8,box9){
		if ((box1.owner == "P1" || box1.owner == "P2") && (box2.owner == "P1" || box2.owner == "P2") && (box3.owner == "P1" || box3.owner == "P2") && (box4.owner == "P1" || box4.owner == "P2") && (box5.owner == "P1" || box5.owner == "P2") && (box6.owner == "P1" || box6.owner == "P2") && (box7.owner == "P1" || box7.owner == "P2") && (box8.owner == "P1" || box8.owner == "P2") && (box9.owner == "P1" || box9.owner == "P2")){
			box1.owner = "";
			box2.owner = "";
			box3.owner = "";
			box4.owner = "";
			box5.owner = "";
			box6.owner = "";
			box7.owner = "";
			box8.owner = "";
			box9.owner = "";
		}
	};

	function big_winner(){

		// Big Box variables to make life easier
		var box1 = $scope.boxes[0];
		var box2 = $scope.boxes[1];
		var box3 = $scope.boxes[2];
		var box4 = $scope.boxes[3];
		var box5 = $scope.boxes[4];
		var box6 = $scope.boxes[5];
		var box7 = $scope.boxes[6];
		var box8 = $scope.boxes[7];
		var box9 = $scope.boxes[8];

		// Winner possibilities
		var winners = [
			[box1,box2,box3],
			[box4,box5,box6],
			[box7,box8,box9],
			[box1,box4,box7],
			[box2,box5,box8],
			[box3,box6,box9],
			[box1,box5,box9],
			[box3,box5,box7]
		];

		// Overall Winner Selection
		for (var i=0; i<winners.length; i++){
			if ((winners[i][0].owner == "P1" || winners[i][0].owner == "P2") && (winners[i][0].owner == winners[i][1].owner) && (winners[i][1].owner == winners[i][2].owner)){
				alert("We have a winner = " + winners[i][0].owner)
			} else {
				winCats(box1,box2,box3,box4,box5,box6,box7,box8,box9);
			}
		};
	};


});