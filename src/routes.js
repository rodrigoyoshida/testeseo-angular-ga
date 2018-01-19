angular
  .module('app')
  .config(($routeProvider, $locationProvider) => {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'app/routes/inicial/inicial.html',
        controller: 'InicialController',
        controllerAs: 'vm',
        meta: {
          title: 'Kbrolostti Verranatubshak',
          description: 'Kbrolostti Verranatubshak este é apenas um teste de SEO, para verificar como as ferramentas de busca indexam frameworks javascript'
        }
      })
      .when('/cadastro', {
        templateUrl: 'app/routes/cadastro/cadastro.html',
        controller: 'CadastroController',
        controllerAs: 'vm',
        meta: {
          title: 'Página de cadastros',
          description: 'Esta é a página de cadastros'
        }
      })
      .when('/cadastro/:id', {
        templateUrl: 'app/routes/cadastro/cadastro.html',
        controller: 'CadastroController',
        controllerAs: 'vm',
        meta: {
          title: '',
          description: ''
        }
      })
      .when('/pagina1', {
        templateUrl: 'app/routes/pagina1/pagina1.html',
        controller: 'Pagina1Controller',
        controllerAs: 'vm',
        meta: {
          title: 'Straktonasi Detubalai',
          description: 'Straktonasi Detubalai página interna do teste'
        }
      })
      .when('/pagina2', {
        templateUrl: 'app/routes/pagina2/pagina2.html',
        controller: 'Pagina2Controller',
        controllerAs: 'vm',
        meta: {
          title: 'Wrackstim Brolossrkwy',
          description: 'Wrackstim Brolossrkwy página interna do teste'
        }
      })
      .otherwise({
        templateUrl: 'app/routes/notfound/notfound.html',
        controller: 'NotfoundController',
        controllerAs: 'vm',
        meta: {
          title: 'Página não encontrada',
          description: 'Desculpe, a página que você está tentando acessar não foi encontrada'
        }
      });
  });
