(function() {

	angular
		.module('wonderPlaces')
		.factory('quizMetrics', QuizMetrics);

		QuizMetrics.$inject = ['DataService'];

		function QuizMetrics(DataService) {
			var quizObj = {
				quizActive: false,
				resultsActive: false,
				changeState: changeState,
				correctAnswers: [],
				markQuiz: markQuiz,
				numCorrect: 0
			};

			return quizObj;

			function changeState(metric,state) {
				if(metric == 'quiz'){
				quizObj.quizActive = state;
				}else if(metric == 'results'){
					quizObj.resultsActive = state;
				} else { return false;}
			}

			function markQuiz() {
				quizObj.correctAnswers = DataService.correctAnswers;
				for(i=0;i<DataService.quizQs.length;i++){
					if(DataService.quizQs[i].selected === DataService.correctAnswers[i]){
						DataService.quizQs[i].correct = true;
						quizObj.numCorrect++;
					} else {
						DataService.quizQs[i].correct = false;
					}
				}
			}	

		}

})();