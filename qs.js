const factories = [
  { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
  { name: "BR2", employees: ["Jessie", "Karen", "John"] },
  { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
  { name: "BR4", employees: [] }
];

//1. Count Employees Number by Factory // => [ {name: 'BR1', count: 4}, ... ]
function countEmployees(){
	for(var i = 0; i < factories.length; i++){
		factories[i].count = factories[i].employees.length;
	}
}

//2. Count Factories Number by Employee // => [ {employee: 'John', count: 2}, ... ]
function countFactoriesNumByEmployee(){
	var objArr = [];
	var employeeObj = {};
	var arr = []
	for (var i = 0;i < factories.length; i++){
		if (factories[i].employees.length == 0) {
			continue;
		}else{
			for(var j = 0; j < factories[i].employees.length; j++){
				if(objArr.length == 0){
					employeeObj.employee = factories[i].employees[j];
					employeeObj.count = 0;
					objArr.push(employeeObj);
					employeeObj = {};
				}else{
					console.log('list',arr);
					if(arr.indexOf(factories[i].employees[j]) < 0){
						//console.log(objArr.indexOf(factories[i].employees[j]));
						//console.log(arr.indexOf(factories[i].employees[j]));
						employeeObj.employee = factories[i].employees[j];
						employeeObj.count = 0;
						objArr.push(employeeObj);
						employeeObj = {};
					}
				}
				for(var k = 0;k < objArr.length; k++){
					if(factories[i].employees[j] == objArr[k].employee){
						objArr[k].count++;
					}
					arr = arr.concat(Object.values(objArr[k]));
				}
				console.log('objArr.length',objArr.length);
			}
		}
	}
}

//3. Order employees list by alphabetical order // =>   { name: "BR2", employees: ["Jessie", "John", "Karen"] }
function OrderByalphabetical(){
	for(var i = 0; i < factories.length; i++){
		factories[i].employees.sort();
	}
}

const employeeType = [
      {id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00"},//8
      {id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00"},//9
      {id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00"},//4
];

const employees = [
        {id: 1, name: "Alice", type: 2},
        {id: 2, name: "Bob", type: 3},
        {id: 3, name: "John", type: 2},
        {id: 4, name: "Karen", type: 1},
        {id: 5, name: "Miles", type: 3},
        {id: 6, name: "Henry", type: 1}
];

const tasks = [
      {id: 1, title: "task01", duration: 60 //min},
      {id: 2, title: "task02", duration: 120},
      {id: 3, title: "task03", duration: 180},
      {id: 4, title: "task04", duration: 360},
      {id: 5, title: "task05", duration: 30},
      {id: 6, title: "task06", duration: 220},
      {id: 7, title: "task07", duration: 640},
      {id: 8, title: "task08", duration: 250},
      {id: 9, title: "task09", duration: 119},
      {id: 10, title: "task10", duration: 560},
      {id: 11, title: "task11", duration: 340},
      {id: 12, title: "task12", duration: 45},
      {id: 13, title: "task13", duration: 86},
      {id: 14, title: "task14", duration: 480},
      {id: 15, title: "task15", duration: 900}
];

//4. Count total hours worked in 1 day ? // => 39
function CountTotalHours(){
	var totalHours = 0
	for(var i = 0; i < employeeType.length; i++){
		begin = employeeType[i].work_begin.split(':');
		end = employeeType[i].work_end.split(':');
		if(begin[0] == '00'){
			begin[0] = '24';
		}
		if(end[0] == '00'){
			end[0] = '24';
		}
		begin = parseInt(begin[0]);
		end = parseInt(end[0]);
		employeeType[i].time = end - begin;
	}
	for(var i = 0; i < employees.length; i++){
		switch(employees[i].type){
			case 1:
				totalHours += employeeType[0].time;
				break;
			case 2:
				totalHours += employeeType[1].time;
				break;
			default:
				totalHours += employeeType[2].time;
		}
	}
}
//5. Make a function that take as parameters dayTime and return number of employee working
function howManyEmployeeByTime(time){
	
}
//6. How many days of work needed to done all tasks ? // => 1 day = 9:00 to 00:00 between 00:00 and 09:00 doesnt count.