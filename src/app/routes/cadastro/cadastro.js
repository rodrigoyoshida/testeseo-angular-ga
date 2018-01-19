angular
  .module('app')
  .controller('CadastroController', CadastroController);

function CadastroController($routeParams, $http, $timeout, ngMeta) {
  const vm = this;

  $http.get('app/routes/cadastro/cadastro.json').then(results => {
    if ($routeParams.id) {
      $timeout(() => {
        vm.cadastro = results.data[$routeParams.id];
        ngMeta.setTitle(`Cadastro de ${vm.cadastro.nome} ${vm.cadastro.sobrenome}`);
        ngMeta.setTag('description', `Veja todos os detalhes do cadastro de ${vm.cadastro.nome} ${vm.cadastro.sobrenome}`);
      }, 1000);
    } else {
      vm.lista = results.data;
    }
  });
}
