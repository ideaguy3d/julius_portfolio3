'use strict';

angular.module('core').controller('HomeController',
  ['$stateParams', '$scope', '$firebaseArray', 'myCache', '$parse',
    function($stateParams, $scope, $firebaseArray, myCache, $parse){
      // global[to this func] vars
      $scope.gamesArray        = [];
      $scope.urlPublisherParam = $stateParams.publisher;
      var databaseObject;
      var firebase_ref         = new Firebase('https://resplendent-torch-1239.firebaseio.com/');
      $scope.game_publishers   = $firebaseArray(firebase_ref);
      $scope.sortgames         = 'name';
      $scope.star              = 'j-core/css/ninja_star.png';

      //cache code
      $scope.addToCache = function(key, val){
        myCache.put(key, val);
      };

      $scope.readFromCache = function(key){
        return myCache.get(key);
      };

      $scope.getCacheStats = function(){
        return myCache.info();
      };

      //$parse code
      var getter = $parse('event.name');
      var fn = $parse('1+1');
      console.log(fn());

      var myobj1 = {event: {name: 'Julius'}},
        myobj2 = {event: {name: 'Maximus'}};
      console.log("My name is: "+getter(myobj1)+" "+getter(myobj2));



      /**
       * =================== firebase and data code ===================
       * */
        //this will need to become a service !!
      $scope.InitPublisherData = function(){
        firebase_ref.on('value', function(snapshot){
          databaseObject = snapshot.val();
          //TODO: re-implement as .val().child()
          $scope.databaseObject = databaseObject;
          var urlVal            = $stateParams.publisher;
          for(var prop in databaseObject){
            if(databaseObject[prop].parent_name === urlVal){

              $scope.publisher = databaseObject[prop].publisher;

              for(var i in databaseObject[prop].games){
                $scope.gamesArray.push(databaseObject[prop].games[i]);
              }
              return;//get out of the method, we found it already
            }

          }//end of the "for in prop" loop
        });
      };//end of " $scope.InitPublisherData " method

      /**
       * =================== voting widget functions ===================
       * */


      $scope.voteUp = function(game){
        game.votes++;
        $scope.game_publishers.$save(game);
      };

      $scope.voteDown = function(game){
        game.votes--;
      };

    }//end of the controller function
  ]);
