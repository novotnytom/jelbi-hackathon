

module.exports = {

getRouteNew: function (startLan, startLng, targetLan, targetLng) {

    // ORS Directions
    var openrouteservice = require('openrouteservice-js');
    var Directions1 = new openrouteservice.Directions({
        api_key: "5b3ce3597851110001cf62485f68b3dd8c494731afc5648627e19931"
    });

    // Input Params
    let params = {
        'coordinates': [[startLng,startLan],[targetLng,targetLan]],
        'format': 'json',
        'profile': 'driving-car',
        'preference': 'fastest',
        'instructions': 'false',
        'geometry': 'true',        
      };
            
      Directions1.calculate(params)      
      .then(json => this.setState({result: json}))
      .catch(err => console.log("An error occured: "+ err));

}

}