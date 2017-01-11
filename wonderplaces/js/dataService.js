(function() {

	angular
		.module('wonderPlaces')
		.factory('DataService', DataFactory);


		function DataFactory() {
			var dataObj = {
				placesData: placesData,
				quizQs: quizQs,
				correctAnswers: correctAnswers
			};
			return dataObj;
		}

		var correctAnswers = [1,1,0,0,1,0,1,0];

var quizQs = [
	{

		type: 'text',
		text: "The location of Hanging Gardens is...",
		possibilities: [
			{
				answer: 'Egypt',
			},
			{
				answer: 'Babylon'
			}
		],
		selected: null,
		correct: null

	},
	{

		type: 'image',
		text: "Which of these images is Temple of Artemis?",
		possibilities: [
			{
				answer: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/WashDCMasonic2007.jpg',
			},
			{
				answer: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Miniaturk_009.jpg/800px-Miniaturk_009.jpg'
			}
		],
		selected: null,
		correct: null

	},
	{
		type: 'text',
		text: "The oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact is...",
		possibilities: [
			{
				answer: 'Great Pyramid of Giza',
			},
			{
				answer: 'Mausoleum at Halicarnassus'
			}
		],
		selected: null,
		correct: null
	},
	{
		type: 'text',
		text: "Whose location has not been definitively established?",
		possibilities: [
			{
				answer: 'Hanging Gardens',
			},
			{
				answer: 'Lighthouse of Alexandria'
			}
		],
		selected: null,
		correct: null
	},
	{
		type: 'text',
		text: "A giant seated figure, about 13 m was...",
		possibilities: [
			{
				answer: 'Colossus of Rhodes',
			},
			{
				answer: 'The Statue of Zeus'
			}
		],
		selected: null,
		correct: null
	},
	{
		type: 'text',
		text: "It was completely rebuilt three times before its final destruction",
		possibilities: [
			{
				answer: 'Mausoleum at Halicarnassus',
			},
			{
				answer: 'Temple of Artemis'
			}
		],
		selected: null,
		correct: null
	},
	{
		type: 'text',
		text: "It was one of the tallest man-made structures in the world for many centuries",
		possibilities: [
			{
				answer: 'Colossus of Rhodes',
			},
			{
				answer: 'Lighthouse of Alexandria'
			}
		],
		selected: null,
		correct: null
	},
	{
		type: 'text',
		text: "The location of Colossus of Rhodes is...",
		possibilities: [
			{
				answer: 'Greece',
			},
			{
				answer: 'Turkey'
			}
		],
		selected: null,
		correct: null
	}

	];


})();