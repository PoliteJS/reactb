/**
 * Automaticly render all the elements exported by ReactB
 */

var React = require('react/addons');
var reactb = require('../index');

describe('ReactB', function() {
    
    Object.keys(reactb).forEach(function(key) {
        describe(key, function() {
            var ElementClass = reactb[key];
            
            it('should render element', function() {
                React.addons.TestUtils.renderIntoDocument(<ElementClass />);
            });

        });
    });

});
