(function(){
	angular
	.module("carFacts")
	.controller("listCtrl", ListController);

	function ListController(){
		var vm = this;
	
		vm.data = carsData;
		vm.activeCar = {};
		vm.changeActive = changeActive;
		vm.search = "";
		vm.quizActive = false;
		vm.activateQuiz = activateQuiz;


		function changeActive(index){
			vm.activeCar = index;
		}

		function activateQuiz(){
			vm.quizActive = true;
		}
	}

})();