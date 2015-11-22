//<!-- reference http://www.sitepoint.com/creating-crud-app-minutes-angulars-resource/ -->

angular.module('movieApp.services', []).factory('Movie', function($resource) {
  return $resource('http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
});