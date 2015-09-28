var app = angular.module("toDoApp", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'list1.html',
			controller: 'List1Controller'
		})
		.when('/List-1', {
			templateUrl: 'list1.html',
			controller: 'List1Controller'
		})
		.when('/List-2', {
			templateUrl: 'list2.html',
			controller: 'List2Controller'
		})
		.when('/List-3', {
			templateUrl: 'list3.html',
			controller: 'List3Controller'
		});
});

app.controller('List1Controller', function ($scope) {
	document.querySelector(".active").setAttribute("class", "control-item");
	document.querySelector("a[href='#/List-1']").setAttribute("class", "control-item active");

	if (localStorage.getItem("angular-list-1")) {
		this.items = JSON.parse(localStorage.getItem("angular-list-1"));
	} else {
		this.items = [
			{
				task: "Finish Angular assignment",
				status: "icon-check"
			},
			{
				task: "Sleep",
				status: "icon-close"
			},
			{
				task: "Work on next assignment",
				status: "icon-close"
			}
		];
		localStorage.setItem("angular-list-1", JSON.stringify(this.items));
	}

	this.addItem = function (item) {
		var newItem = {
			task: item,
			status: "icon-close"
		};
		delete this.input;
		this.items.push(newItem);
		localStorage.setItem("angular-list-1", JSON.stringify(this.items));
	}

	this.removeItem = function (e) {
		this.items.splice(e, 1);
		localStorage.setItem("angular-list-1", JSON.stringify(this.items));
	}

	this.toggle = function (e) {
		if (this.items[e].status === "icon-close") {
			this.items[e].status = "icon-check";
		} else {
			this.items[e].status = "icon-close";
		}
		localStorage.setItem("angular-list-1", JSON.stringify(this.items));
	}
});

app.controller('List2Controller', function () {
	document.querySelector(".active").setAttribute("class", "control-item");
	document.querySelector("a[href='#/List-2']").setAttribute("class", "control-item active");
	
	if (localStorage.getItem("angular-list-2")) {
		this.items = JSON.parse(localStorage.getItem("angular-list-2"));
	} else {
		this.items = [
			{
				task: "List 2",
				status: "icon-close"
			}
		];
		localStorage.setItem("angular-list-2", JSON.stringify(this.items));
	}

	this.addItem = function (item) {
		var newItem = {
			task: item,
			status: "icon-close"
		};
		delete this.input;
		this.items.push(newItem);
		localStorage.setItem("angular-list-2", JSON.stringify(this.items));
	}

	this.removeItem = function (e) {
		this.items.splice(e, 1);
		localStorage.setItem("angular-list-2", JSON.stringify(this.items));
	}

	this.toggle = function (e) {
		if (this.items[e].status === "icon-close") {
			this.items[e].status = "icon-check";
		} else {
			this.items[e].status = "icon-close";
		}
		localStorage.setItem("angular-list-2", JSON.stringify(this.items));
	}
});

app.controller('List3Controller', function () {
	document.querySelector(".active").setAttribute("class", "control-item");
	document.querySelector("a[href='#/List-3']").setAttribute("class", "control-item active");
	
	if (localStorage.getItem("angular-list-3")) {
		this.items = JSON.parse(localStorage.getItem("angular-list-3"));
	} else {
		this.items = [
			{
				task: "List 3",
				status: "icon-close"
			}
		];
		localStorage.setItem("angular-list-3", JSON.stringify(this.items));
	}

	this.addItem = function (item) {
		var newItem = {
			task: item,
			status: "icon-close"
		};
		delete this.input;
		this.items.push(newItem);
		localStorage.setItem("angular-list-3", JSON.stringify(this.items));
	}

	this.removeItem = function (e) {
		this.items.splice(e, 1);
		localStorage.setItem("angular-list-3", JSON.stringify(this.items));
	}

	this.toggle = function (e) {
		if (this.items[e].status === "icon-close") {
			this.items[e].status = "icon-check";
		} else {
			this.items[e].status = "icon-close";
		}
		localStorage.setItem("angular-list-3", JSON.stringify(this.items));
	}
});