'use strict';

App.controller('BoxKeyController', ['$scope', 'BoxKeyService', function($scope, BoxKeyService) {
          var self = this;
          self.key={id:null,serial:'',opnum:'',datetime:''};
          self.keys=[];
              
          self.fetchAllKeys = function(){
              BoxKeyService.fetchAllBoxKeys()
                  .then(
      					       function(d) {
      						        self.keys = d;
      					       },
            					function(errResponse){
            						console.error('Error while fetching keys');
            					}
      			       );
          };
           
          self.createKey = function(key){
              BoxKeyService.createKey(key)
		              .then(
                      self.fetchAllKeys, 
				              function(errResponse){
					               console.error('Error while creating Key.');
				              }	
                  );
          };

         self.updateKey = function(key, id){
              BoxKeyService.updateBoxKey(key, id)
		              .then(
				              self.fetchAllBoxKeys, 
				              function(errResponse){
					               console.error('Error while updating Key.');
				              }	
                  );
          };

         self.deleteBoxKey = function(id){
              BoxKeyService.deleteBoxKey(id)
		              .then(
				              self.fetchAllBoxKeys, 
				              function(errResponse){
					               console.error('Error while deleting Key.');
				              }	
                  );
          };

          self.fetchAllBoxKeys();

          self.submit = function() {
              if(self.key.id==null){
                  console.log('Saving New Key', self.key);    
                  self.createBoxKey(self.key);
              }else{
                  self.updateBoxKey(self.key, self.key.id);
                  console.log('Key updated with id ', self.key.id);
              }
              self.reset();
          };
              
          self.edit = function(id){
              console.log('id to be edited', id);
              for(var i = 0; i < self.keys.length; i++){
                  if(self.keys[i].id == id) {
                     self.key = angular.copy(self.keys[i]);
                     break;
                  }
              }
          };
              
          self.remove = function(id){
              console.log('id to be deleted', id);
              for(var i = 0; i < self.keys.length; i++){
                  if(self.keys[i].id == id) {
                     self.reset();
                     break;
                  }
              }
              self.deleteBoxKey(id);
          };

          
          self.reset = function(){
              self.key={id:null,keyname:'',address:'',email:''};
              $scope.myForm.$setPristine(); //reset Form
          };

      }]);
