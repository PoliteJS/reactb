'use strict';

var React = require('react');
var classMap = require('../class-map');
var statusList = require('../status-list');

var Input = React.createClass({
    propTypes: {
        size: React.PropTypes.oneOf(['lg','sm']),
        status: React.PropTypes.oneOf(['readonly','disabled'])
    },
    getDefaultProps() {
        return {
            type: 'text',
            size: null,
            status: null
        };
    },
    getValue() {
        return this.refs['input'].getDOMNode().value;
    },
    setValue(newValue) {
        this.refs['input'].getDOMNode().value = newValue;
    },
    render() {
        var {type, size, status, rows, cols, value, className, children, ...other} = this.props;
        var classes = new classMap(['form-control', 'form-control-static']);

        if (size) {
            classes.addClass('input-' + size);
        }

        if (type && ['textarea','static','select'].indexOf(type) === -1) {
            other.type = type;
        }

        if ('disabled' === status) {
            other.disabled = 'disabled';
        }

        if ('readonly' === status) {
            other.readonly = 'readonly';
        }

        if (className) {
            classes.add(className);
        }

        switch (type) {
            case 'static':
                classes.set('form-control', false);
                return <p {...other} className={classes}>{value || children}</p>;
                
            case 'textarea':
                classes.set('form-control-static', false);
                if (rows) {
                    other.rows = rows;
                }
                if (cols) {
                    other.cols = cols;
                }
                return <textarea {...other} className={classes} ref="input">{value || children}</textarea>;

            case 'select':
                classes.set('form-control-static', false);
                return <select {...other} className={classes} ref="input">{value || children}</select>;
                
            default:
                classes.set('form-control-static', false);
                return <input {...other} className={classes} value={value || children} ref="input" />;    
        }
    }
});

module.exports = Input;