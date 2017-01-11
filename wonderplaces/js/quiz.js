(function() {

	angular
		.module('wonderPlaces')
		.controller('quizCtrl', QuizController);

		QuizController.$inject = ['quizMetrics', 'DataService'];

		function QuizController(quizMetrics, DataService) {

			var vm = this;
			vm.quizMetrics = quizMetrics; 
			vm.DataService = DataService;
			vm.qnAnswered = qnAnswered;
			vm.setActiveQn = setActiveQn;
			vm.selectAnswer = selectAnswer;
			vm.finaliseAnswers = finaliseAnswers;
			vm.activeQn = 0; 
			vm.error = false;
			vm.finalise = false;


			var numQsAnswered = 0;
//quiz logic

			function setActiveQn(index) {
				if(index === undefined){
				var breakOut = false;
				var quizLength = DataService.quizQs.length -1;
				while(!breakOut){
					vm.activeQn = vm.activeQn < quizLength?++vm.activeQn:0;

					if(vm.activeQn === 0){
						vm.error = true;
					}

					if(DataService.quizQs[vm.activeQn].selected === null){
						breakOut = true;
					}
				}
			}else{
				vm.activeQn = index;
			}
		}     

			function qnAnswered() {
				var quizLength = DataService.quizQs.length;

				if(DataService.quizQs[vm.activeQn].selected !== null){
					numQsAnswered++;
					if(numQsAnswered >= quizLength){
						for(i=0;i<quizLength;i++){
							if(DataService.quizQs[i].selected === null){
								setActiveQn(i);
								return;
							}
						}

						vm.error = false;
						vm.finalise = true;
						return;
					}
				}

				vm.setActiveQn();
			}

			function selectAnswer(index) {
				DataService.quizQs[vm.activeQn].selected = index;
			}

			function finaliseAnswers() {
				vm.finalise = false;
				numQsAnswered = 0;
				vm.activeQn = 0;
				quizMetrics.markQuiz();
				quizMetrics.changeState("quiz", false);
				quizMetrics.changeState("results", true);
			}
		} 



})();