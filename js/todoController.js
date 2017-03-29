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
    {title: 'GO to GA', time: '9am to 6pm', busy: true},
    {title: 'dinner', time: '6pm to 630pm', busy: true},
    {title: 'GO to GA', time: '7pm to 8pm', busy: true},
    {title: 'GO to GA', time: '8pm to 6pm', busy: true},
  ]
}











}())
