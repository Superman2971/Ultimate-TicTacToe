var TTTapp = angular.module("TTT_app",[]);

// Created our controller
TTTapp.controller("TTT_Ctrl",function($scope){

	// Created all the boxes as objects - NEEDS TO COMPLETELY CHANGE = FOR LOOPS + array/objects/object
	$scope.boxes = [
			{owner: "", BigBox: BB1, boxes:[
				{owner:"",ID:"box1",number:0},{owner:"",ID:"box2",number:1},{owner:"",ID:"box3",number:2},
				{owner:"",ID:"box4",number:0},{owner:"",ID:"box5",number:1},{owner:"",ID:"box6",number:2},
				{owner:"",ID:"box7",number:0},{owner:"",ID:"box8",number:1},{owner:"",ID:"box9",number:2}	
			]},
			{owner: "", BigBox: BB2, boxes:[
				{owner:"",ID:"box10",number:0},{owner:"",ID:"box11",number:1},{owner:"",ID:"box12",number:2},
				{owner:"",ID:"box13",number:0},{owner:"",ID:"box14",number:1},{owner:"",ID:"box15",number:2},
				{owner:"",ID:"box16",number:0},{owner:"",ID:"box17",number:1},{owner:"",ID:"box18",number:2}
			]},
			{owner: "", BigBox: BB3, boxes:[
				{owner:"",ID:"box19",number:0},{owner:"",ID:"box20",number:1},{owner:"",ID:"box21",number:2},
				{owner:"",ID:"box22",number:0},{owner:"",ID:"box23",number:1},{owner:"",ID:"box24",number:2},
				{owner:"",ID:"box25",number:0},{owner:"",ID:"box26",number:1},{owner:"",ID:"box27",number:2}
			]},
			{owner: "", BigBox: BB4, boxes:[
				{owner:"",ID:"box28",number:0},{owner:"",ID:"box29",number:1},{owner:"",ID:"box30",number:2},
				{owner:"",ID:"box31",number:0},{owner:"",ID:"box32",number:1},{owner:"",ID:"box33",number:2},
				{owner:"",ID:"box34",number:0},{owner:"",ID:"box35",number:1},{owner:"",ID:"box36",number:2}
			]},
			{owner: "", BigBox: BB5, boxes:[
				{owner:"",ID:"box37",number:0},{owner:"",ID:"box38",number:1},{owner:"",ID:"box39",number:2},
				{owner:"",ID:"box40",number:0},{owner:"",ID:"box41",number:1},{owner:"",ID:"box42",number:2},
				{owner:"",ID:"box43",number:0},{owner:"",ID:"box44",number:1},{owner:"",ID:"box45",number:2}
			]},
			{owner: "", BigBox: BB6, boxes:[
				{owner:"",ID:"box46",number:0},{owner:"",ID:"box47",number:1},{owner:"",ID:"box48",number:2},
				{owner:"",ID:"box49",number:0},{owner:"",ID:"box50",number:1},{owner:"",ID:"box51",number:2},
				{owner:"",ID:"box52",number:0},{owner:"",ID:"box53",number:1},{owner:"",ID:"box54",number:2}
			]},
			{owner: "", BigBox: BB7, boxes:[
				{owner:"",ID:"box55",number:0},{owner:"",ID:"box56",number:1},{owner:"",ID:"box57",number:2},
				{owner:"",ID:"box58",number:0},{owner:"",ID:"box59",number:1},{owner:"",ID:"box60",number:2},
				{owner:"",ID:"box61",number:0},{owner:"",ID:"box62",number:1},{owner:"",ID:"box63",number:2}
			]},
			{owner: "", BigBox: BB8, boxes:[
				{owner:"",ID:"box64",number:0},{owner:"",ID:"box65",number:1},{owner:"",ID:"box66",number:2},
				{owner:"",ID:"box67",number:0},{owner:"",ID:"box68",number:1},{owner:"",ID:"box69",number:2},
				{owner:"",ID:"box70",number:0},{owner:"",ID:"box71",number:1},{owner:"",ID:"box72",number:2}
			]},
			{owner: "", BigBox: BB9, boxes:[
				{owner:"",ID:"box73",number:0},{owner:"",ID:"box74",number:1},{owner:"",ID:"box75",number:2},
				{owner:"",ID:"box76",number:0},{owner:"",ID:"box77",number:1},{owner:"",ID:"box78",number:2},
				{owner:"",ID:"box79",number:0},{owner:"",ID:"box80",number:1},{owner:"",ID:"box81",number:2}
			]}
	];

	// // Variable for the Player
	// $scope.Player_Name = "Player 1";

	// // Dynamic Player Names - this is the variable they change
	// $scope.Player_Names = ["Player 1", "Player 2"]

	// // ng-show Turns and Winners
	// $scope.PlayerTurn = true;
	// $scope.Winner1 = false;
	// $scope.Winner2 = false;

	// // Function to claim ownership over squares
	// $scope.claim = function(BigSquare, big_object, inner_row, object_num){

	// 	// Variables to make the logic easier to write
	// 	var box1 = big_object[0][0];
	// 	var box2 = big_object[0][1];
	// 	var box3 = big_object[0][2];
	// 	var box4 = big_object[1][0];
	// 	var box5 = big_object[1][1];
	// 	var box6 = big_object[1][2];
	// 	var box7 = big_object[2][0];
	// 	var box8 = big_object[2][1];
	// 	var box9 = big_object[2][2];

	// 	// First checks if space is owned
	// 	if (inner_row[object_num].owner == "P1" || inner_row[object_num].owner == "P2"){
	// 		alert("Nope, pick another spot bro");
	// 	} else {
	// 		// Then gives ownership based on Player and changes turns
	// 		if ($scope.Player_Name == $scope.Player_Names[0]){
	// 			inner_row[object_num].owner = "P1";
	// 			$scope.Player_Name = $scope.Player_Names[1];
	// 			$scope.winner(BigSquare,box1,box2,box3,box4,box5,box6,box7,box8,box9);
	// 		} else {
	// 			inner_row[object_num].owner = "P2";
	// 			$scope.Player_Name = $scope.Player_Names[0];
	// 			$scope.winner(BigSquare,box1,box2,box3,box4,box5,box6,box7,box8,box9);
	// 		}
	// 	}
	// };

	// //LOGIC FOR WINNER
	// $scope.winner = function(BigSquare,box1,box2,box3,box4,box5,box6,box7,box8,box9){

	// 	// Logic to find winner!
	// 	var winners = [
	// 		[box1,box2,box3],
	// 		[box4,box5,box6],
	// 		[box7,box8,box9],
	// 		[box1,box4,box7],
	// 		[box2,box5,box8],
	// 		[box3,box6,box9],
	// 		[box1,box5,box9],
	// 		[box3,box5,box7]
	// 	];

	// 	var catsgame_win = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

	// 	// Individual Sections Winner Selection
	// 	for (var i=0; i<winners.length; i++){
	// 		if ((winners[i][0].owner == "P1" || winners[i][0].owner == "P2") && winners[i][0].owner == winners[i][1].owner && winners[i][1].owner == winners[i][2].owner){
	// 			box1.owner = winners[i][0].owner;
	// 			box2.owner = winners[i][0].owner;
	// 			box3.owner = winners[i][0].owner;
	// 			box4.owner = winners[i][0].owner;
	// 			box5.owner = winners[i][0].owner;
	// 			box6.owner = winners[i][0].owner;
	// 			box7.owner = winners[i][0].owner;
	// 			box8.owner = winners[i][0].owner;
	// 			box9.owner = winners[i][0].owner;
	// 			BigSquare.owner = winners[i][0].owner;
	// 			$scope.big_winner();
	// 		} else {
	// 			winCats(box1,box2,box3,box4,box5,box6,box7,box8,box9);
	// 		}
	// 	};
	// };

	// function winCats(box1,box2,box3,box4,box5,box6,box7,box8,box9){
	// 	if ((box1.owner == "P1" || box1.owner == "P2") && (box2.owner == "P1" || box2.owner == "P2") && (box3.owner == "P1" || box3.owner == "P2") && (box4.owner == "P1" || box4.owner == "P2") && (box5.owner == "P1" || box5.owner == "P2") && (box6.owner == "P1" || box6.owner == "P2") && (box7.owner == "P1" || box7.owner == "P2") && (box8.owner == "P1" || box8.owner == "P2") && (box9.owner == "P1" || box9.owner == "P2")){
	// 		box1.owner = "";
	// 		box2.owner = "";
	// 		box3.owner = "";
	// 		box4.owner = "";
	// 		box5.owner = "";
	// 		box6.owner = "";
	// 		box7.owner = "";
	// 		box8.owner = "";
	// 		box9.owner = "";
	// 	}
	// };

	// $scope.big_winner = function(){
	// 	// Variables to make the logic easier to write
	// 	var big_box1 = $scope.boxes[0][0];
	// 	var big_box2 = $scope.boxes[0][1];
	// 	var big_box3 = $scope.boxes[0][2];
	// 	var big_box4 = $scope.boxes[1][0];
	// 	var big_box5 = $scope.boxes[1][1];
	// 	var big_box6 = $scope.boxes[1][2];
	// 	var big_box7 = $scope.boxes[2][0];
	// 	var big_box8 = $scope.boxes[2][1];
	// 	var big_box9 = $scope.boxes[2][2];

	// 	// Logic to find winner!
	// 	var big_winners = [
	// 		[big_box1,big_box2,big_box3],
	// 		[big_box4,big_box5,big_box6],
	// 		[big_box7,big_box8,big_box9],
	// 		[big_box1,big_box4,big_box7],
	// 		[big_box2,big_box5,big_box8],
	// 		[big_box3,big_box6,big_box9],
	// 		[big_box1,big_box5,big_box9],
	// 		[big_box3,big_box5,big_box7]
	// 	];

	// 	// The Big Winner Selection
	// 	for (var i=0; i<big_winners.length; i++){
	// 		if ((big_winners[i][0].owner == "P1" || big_winners[i][0].owner == "P2") && big_winners[i][0].owner == big_winners[i][1].owner && big_winners[i][1].owner == big_winners[i][2].owner){
	// 			if (big_winners[i][0].owner == "P1"){
	// 				alert("winner is Ian" + Player_Names[0]);
	// 				// $scope.PlayerTurn = false;
	// 				// $scope.Winner1 = true;
	// 			} else if (big_winners[i][0].owner == "P2"){
	// 				alert("winner is " + $scope.Player_Names[1]);
	// 				// $scope.PlayerTurn = false;
	// 				// $scope.Winner2 = true;
	// 			};
	// 		} else {
	// 			$scope.winCats(box1,box2,box3,box4,box5,box6,box7,box8,box9);
	// 		}
	// 	};
	// };

});