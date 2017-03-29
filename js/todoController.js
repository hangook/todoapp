(function () {

angular.module('todosApp')
  .controller('TodosController', TodosController)

function TodosController($scope, $log) {
  $scope.add = addTodo
  $scope.newTodo = {
    title: '',
    time: ''
  }

  $scope.all = [
    {title: 'GO to GA', time: '9am to 6pm', busy: true},
    {title: 'dinner', time: '6pm to 630pm', busy: true},
    {title: 'homework', time: '7pm to 8pm', busy: true},
    {title: 'chill', time: '8pm to 6pm', busy: true}
  ]

  $log.log($scope.all)

}

function addTodo() {
  $scope.all.push({
    title: $scope.newTodo.title,
    time: $scope.newTodo.time,
    busy: true,
  })
  $scope.newTodo = {
    title: '',
    time: ''
  }


}









}())
