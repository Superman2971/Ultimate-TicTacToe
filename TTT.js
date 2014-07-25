var TTTapp = angular.module("TTT",["firebase"]);

// Created our controller
TTTapp.controller("TTTcontroller",function($scope, $firebase){

	// CHAT FEATURE
	// Variable for my Firebase
	var Fire = new Firebase("https://ttt-ultimate.firebaseio.com" + "/chat_room");
	$scope.issues = $firebase(Fire);
	$scope.addOne = function(){
		//Add manually using standard JavaScript
		Fire.push( {title:$scope.title, body:$scope.body} );
		$scope.title = $scope.body = "";
		// 	//Or use AngularFire methods like $add, $remove, $update etc.
		// 	//$scope.chores.$add( {title:$scope.title, body:$scope.body} )
	};

	//Testing Multiplayer stuff
	$scope.remote_boxes = $firebase(new Firebase("https://ttt-ultimate.firebaseio.com" + "/remote_boxes"));
	$scope.remote_Player_Name = $firebase(new Firebase("https://ttt-ultimate.firebaseio.com" + "/player"));

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
	console.log($scope.boxes)

	// Variable for the Player
	$scope.Player_Name = "Player 1";

	// Dynamic Player Names - this is the variable they change
	$scope.Player_Names = ["Player 1", "Player 2"]

	// More multiplayer stuff --> Binding it!
	$scope.remote_boxes.$bind($scope, "boxes");
  $scope.$watch("boxes", function() {
    console.log('Model changed!') ;
  });
	$scope.remote_Player_Name.$bind($scope, "Player_Name");
  $scope.$watch("Player_Name", function() {
    console.log('Player changed!') ;
  });

// $scope.items.$bind($scope, "remoteItems");
// $scope.remoteItems.bar = "foo";  // new Firebase(URL + "/bar") is now "foo".

	// Function to claim ownership over squares
	$scope.claim = function(BigBox, SmallBox, small_owner){

		// First checks if space is owned
		if (small_owner == "P1" || small_owner == "P2"){
			return false;
		} else {
			// Then gives small_ownership based on Player and changes turns
			if ($scope.Player_Name == $scope.Player_Names[0]){
				SmallBox.owner = "P1";
				$scope.Player_Name = $scope.Player_Names[1];
				$scope.winner(BigBox);
				$scope.$apply();
			} else {
				SmallBox.owner = "P2";
				$scope.Player_Name = $scope.Player_Names[0];
				$scope.winner(BigBox);
				$scope.$apply();
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

		// Overall Winner Selection
		for (var i=0; i<winners.length; i++){
			if ((winners[i][0].owner == "P1" || winners[i][0].owner == "P2") && (winners[i][0].owner == winners[i][1].owner) && (winners[i][1].owner == winners[i][2].owner)){
				$scope.new_game = true;
				if (winners[i][0].owner == "P1") {
					$scope.P1_win += 1;
					clear("P1");
					game_continue = false;
					break;
				} else {
					$scope.P2_win += 1;
					clear("P2");
					game_continue = false;
					break;
				}
			}
		};
		if (game_continue){
			if ((box1.owner == "P1" || box1.owner == "P2") && (box2.owner == "P1" || box2.owner == "P2") && (box3.owner == "P1" || box3.owner == "P2") && (box4.owner == "P1" || box4.owner == "P2") && (box5.owner == "P1" || box5.owner == "P2") && (box6.owner == "P1" || box6.owner == "P2") && (box7.owner == "P1" || box7.owner == "P2") && (box8.owner == "P1" || box8.owner == "P2") && (box9.owner == "P1" || box9.owner == "P2")){
				$scope.catsgames += 1;
				clear("");
			}			
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
		$scope.Player_Name = $scope.Player_Names[0];
		$scope.P1_win = 0;
		$scope.P2_win = 0;
		$scope.catsgames = 0;
		clear("");
	}

	// New Game
	$scope.new_game = false;
	$scope.click_game = function(){
		$scope.new_game = false;
		clear("");
	};

});