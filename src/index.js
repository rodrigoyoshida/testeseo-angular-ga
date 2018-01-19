angular
  .module('app', ['ngRoute', 'ngMeta'])
  .run(($rootScope, $location, $window, ngMeta) => {
    ngMeta.init();
    const unregister = $rootScope.$on('$routeChangeSuccess', () => {
      const dataLayer = $window.dataLayer = $window.dataLayer || [];
      dataLayer.push({
        event: 'ngRouteChange',
        attributes: {
          route: $location.path()
        }
      });
    });
    $rootScope.$on('$destroy', unregister);
  });
