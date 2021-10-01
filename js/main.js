var app = angular.module("pass", ['ngMaterial']);
app.controller('AppCtrl', ['$scope',
    function($scope) {
       console.log('running');
        $scope.pass="";
        $scope.chunk_size = 12;

         $scope.chunkSubstr = function(str, size) {
                if (typeof(size) === "undefined" || !parseInt(size)) return;

                let numChunks = Math.ceil(str.length / size),
                    chunks = new Array(numChunks);

                for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
                    chunks[i] = str.substr(o, size);
                }

                return chunks;
            };
    }]
);
