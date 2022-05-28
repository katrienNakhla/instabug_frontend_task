angular.module('appModule').service('Employees', EmployeesService);

function EmployeesService($http) {
  const getEmployees = () => {
    const employeesUrl = 'https://fe-task.getsandbox.com/employees?page=2';
    console.log('$http.get(employeesUrl)=> ', $http.get(employeesUrl));
    return $http.get(employeesUrl);
  };

  const loadMoreEmployees = () => {
    // [Load more empolyess logic goes here]
    //helloo
  };

  return {
    getEmployees,
    loadMoreEmployees,
  };
}
