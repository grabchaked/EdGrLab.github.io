(function(){
	angular
	.module("EdGrLab")
	.controller("Ctrl", ListController);

	function ListController(){
		var vm = this;
		vm.data = projectsData;
		vm.search = "";
		 
	}

})();