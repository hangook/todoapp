(function () {

angular.module('todosApp')
  .controller('TodosController', TodosController)

function TodosController($scope) {
  $scope.add = addTodo
  $scope.newTodo = {
    title: '',
    time: '',


  }
  $scope.all = [
    {title: 'GO to GA', time: '9am to 6pm', complete: true},
    {title: 'dinner', time: '6pm to 630pm', complete: true},
    {title: 'homework', time: '7pm to 8pm', complete: true},
    {title: 'chill', time: '8pm to 6pm', complete: true},
  ]
  $log.log($scope.all)

}

function addTodo() {
  $scope.all.push({
    title: $scope.newTodo.title,
    time: $scope.newTodo.time,
    complete: true,
  })text
  $scope.newTodo = {
    title: '',
    time: ''
  }


}









}())
