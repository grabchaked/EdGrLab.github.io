(function() {
	angular
		.module('wonderPlaces')
		.controller('listCtrl', ListController);

		ListController.$inject = ['quizMetrics', 'DataService'];

	function ListController(quizMetrics, DataService){
		var vm = this; 
		vm.quizMetrics = quizMetrics;
		vm.data = DataService.placesData;
		vm.activePlace = {};
		vm.changeActive = changeActive;
		vm.activateQuiz = activateQuiz;
		vm.search = '';
		 

		function changeActive(place) {
			vm.activePlace = place;
		}

		function activateQuiz() {
			quizMetrics.changeState("quiz", true);
		}
	}

})();