import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class RayrIcon extends React.Component {

    static propTypes = {
        type: PropTypes.string
    };

    static defaultProps = {
        type: 'battery'
    };

    render() {
        return (
            <i className={`rayr-icon rayr-icon-${this.props.type}`}></i>
        );
    }
}

export default RayrIcon;
