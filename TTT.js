var TTTapp = angular.module("TTT",["firebase"]);

// Created our controller
TTTapp.controller("TTTcontroller",function($scope, $firebase){

/////////////////////////////////////////////// ---- > FIREBASE
	// CHAT FEATURE
	// Variable for my Firebase Chat Room
	var Fire = new Firebase("https://ttt-ultimate.firebaseio.com" + "/chat_room");
	$scope.issues = $firebase(Fire);
	$scope.addOne = function(){
		//Adding manually using standard JavaScript
		Fire.push( {Name:$scope.Player_Name, body:$scope.body} );
		$scope.Player_Name = $scope.body = "";
	};

/////////////////////////////////////////////// ---- > FIREBASE
	//Connecting local variable to the firebase equivalent
	$scope.remote_boxes = $firebase(new Firebase("https://ttt-ultimate.firebaseio.com" + "/remote_boxes"));
	$scope.remote_Player_Name = $firebase(new Firebase("https://ttt-ultimate.firebaseio.com" + "/player"));
	$scope.remote_Player_Names = $firebase(new Firebase("https://ttt-ultimate.firebaseio.com" + "/player_names"));
	$scope.remote_P1_win = $firebase(new Firebase("https://ttt-ultimate.firebaseio.com" + "/P1_wins"));
	$scope.remote_P2_win = $firebase(new Firebase("https://ttt-ultimate.firebaseio.com" + "/P2_wins"));
	$scope.remote_catsgame = $firebase(new Firebase("https://ttt-ultimate.firebaseio.com" + "/catsgames"));
	$scope.remote_P1_seat = $firebase(new Firebase("https://ttt-ultimate.firebaseio.com" + "/P1_seat"));
	$scope.remote_P2_seat = $firebase(new Firebase("https://ttt-ultimate.firebaseio.com" + "/P2_seat"));
	$scope.remote_PlayerTurn = $firebase(new Firebase("https://ttt-ultimate.firebaseio.com" + "/PlayerTurn"));

// /////////////////////////////////////////////// ---- > FIREBASE

	// Constructor function to develop the game board objects (BigBoxes and SmallBoxes)
	$scope.boxes = [];
	function newBigBox(){
		this.owner = "";
		this.boxes = [];
	};
	function newSmallBox(){
		this.owner = "";
	};

	for (var i = 0; i<9; i++){
		var x = new newBigBox();
		$scope.boxes.push(x);
		for (var j = 0; j<9; j++){
			var y = new newSmallBox();
			$scope.boxes[i].boxes.push(y);
		}
	};

	// Variable for the Player
	$scope.Player_Name = "Player 1";

	// Dynamic Player Names - this is the variable they change
	$scope.Player_Names = ["Player 1", "Player 2"]

	// Adding in multi device switch between players
	$scope.P1_taken = false;
	$scope.P2_taken = false;
	var userID = "";
	$scope.PlayerTurn = "P1";
	$scope.claim_P1 = function(){
		userID = "P1";
		$scope.P1_taken = true;
	}
	$scope.claim_P2 = function(){
		userID = "P2";
		$scope.P2_taken = true;
	}

/////////////////////////////////////////////// ---- > FIREBASE
	// This container object is what gets synced for the Array of boxes:
  $scope.firebase_object = {
    boxes_representative: $scope.boxes
  };

	// More multiplayer stuff --> Binding it!
	$scope.remote_boxes.$bind($scope, "firebase_object"); // Now I must replace every entry of boxes (or $scope.boxes) with $scope.firebase_object.boxes_representative
  $scope.$watch("boxes", function() {
    return false;
  });

	$scope.remote_Player_Name.$bind($scope, "Player_Name");
  $scope.$watch("Player_Name", function() {
    return false;
  });

	$scope.remote_P1_win.$bind($scope, "P1_win");
  $scope.$watch("P1_win", function() {
    return false;
  });

	$scope.remote_P2_win.$bind($scope, "P2_win");
  $scope.$watch("P2_win", function() {
    return false;
  });

	$scope.remote_catsgame.$bind($scope, "catsgames");
  $scope.$watch("catsgames", function() {
    return false;
  });

	$scope.remote_P1_seat.$bind($scope, "P1_taken");
  $scope.$watch("P1_taken", function() {
    return false;
  });

	$scope.remote_P2_seat.$bind($scope, "P2_taken");
  $scope.$watch("P2_taken", function() {
    return false;
  });

	$scope.remote_PlayerTurn.$bind($scope, "PlayerTurn");
  $scope.$watch("PlayerTurn", function() {
    return false;
  });
/////////////////////////////////////////////// ---- > FIREBASE

	// Function to claim ownership over squares
	$scope.claim = function(BigBox, SmallBox, small_owner){
		console.log(userID);
		console.log($scope.PlayerTurn);
		// First to check if it is your turn to play
		if ($scope.PlayerTurn == userID){
			// Then checking if space is already owned
			if (small_owner == "P1" || small_owner == "P2"){
				return false;
			} else {
				// Then gives small_ownership based on Player and changes turns
				if ($scope.Player_Name == $scope.Player_Names[0]){
					SmallBox.owner = "P1";
					$scope.Player_Name = $scope.Player_Names[1];
					$scope.PlayerTurn = "P2";
					$scope.winner(BigBox);
				} else {
					SmallBox.owner = "P2";
					$scope.Player_Name = $scope.Player_Names[0];
					$scope.PlayerTurn = "P1";
					$scope.winner(BigBox);
				}
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
				break;
			}
		};
		if (BigBox.owner == ""){
			winCats(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		}
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

		// variables for who to give point to
		var P1_Point = false;
		var P2_Point = false;

		// Overall Winner Selection
		for (var i=0; i<winners.length; i++){
			if ((winners[i][0].owner == "P1" || winners[i][0].owner == "P2") && (winners[i][0].owner == winners[i][1].owner) && (winners[i][1].owner == winners[i][2].owner)){
				$scope.new_game = true;
				if (winners[i][0].owner == "P1") {
					P1_Point = true;
					game_continue = false;
					break;
				} else {
					P2_Point = true;
					game_continue = false;
					break;
				}
			}
		};

		// Separeted the catsgame from the loop, solving bug and making it conditional
		if (game_continue){
			if ((box1.owner == "P1" || box1.owner == "P2") && (box2.owner == "P1" || box2.owner == "P2") && (box3.owner == "P1" || box3.owner == "P2") && (box4.owner == "P1" || box4.owner == "P2") && (box5.owner == "P1" || box5.owner == "P2") && (box6.owner == "P1" || box6.owner == "P2") && (box7.owner == "P1" || box7.owner == "P2") && (box8.owner == "P1" || box8.owner == "P2") && (box9.owner == "P1" || box9.owner == "P2")){
				$scope.catsgames += 1;
				clear("");
			}			
		}

		// Added here to remove point additions from the loop (fixed bug)
		if (P1_Point == true){
			$scope.P1_win += 1;
			clear("P1");
			P1_Point = false;
		} else if (P2_Point == true){
			$scope.P2_win += 1;
			clear("P2");
			P2_Point = false;
		}
	};

	// Game conitnue variable = stop the game if winner!
	var game_continue = true;

	// Clear the board
	function clear(value){
		for (var i = 0; i<9; i++){
			$scope.boxes[i].owner = value;
			for (var j = 0; j<9; j++){
				$scope.boxes[i].boxes[j].owner = value;
			};
		};
	};

	// Scoreboard
	$scope.P1_win = 0;
	$scope.P2_win = 0;
	$scope.catsgames = 0;

	// Reset
	$scope.reset = function(){
		game_continue = true;
		$scope.new_game = false;
		$scope.Player_Name = $scope.Player_Names[0];
		$scope.P1_win = 0;
		$scope.P2_win = 0;
		$scope.catsgames = 0;
		$scope.P1_taken = false;
		$scope.P2_taken = false;
		$scope.PlayerTurn = "P1";
		clear("");
	}

	// New Game
	$scope.new_game = false;
	$scope.click_game = function(){
		game_continue = true;
		$scope.new_game = false;
		clear("");
	};

	// Collapsed Chat Room
	$scope.collapsed = true;

});