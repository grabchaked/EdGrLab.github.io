(function() {

	angular
		.module('wonderPlaces')
		.controller('resultsCtrl', ResultsController);

		ResultsController.$inject = ['quizMetrics', 'DataService'];

		function ResultsController(quizMetrics, DataService) {
			var vm = this;

			vm.reset = reset;
			vm.quizMetrics = quizMetrics;	
			vm.DataService = DataService;

			function reset() {
				quizMetrics.changeState('results', false);
				quizMetrics.numCorrect = 0;

				for(i=0;i<DataService.quizQs.length;i++){
					var data = DataService.quizQs[i];
					data.selected = null;
					data.correct = null;
				}
			}
		}

})();