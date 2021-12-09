const strategies = require('./config/passportStrategies');


function initialize(passport){
    passport.use('jwt', strategies.jwtStrategy);
}

module.exports = initialize;