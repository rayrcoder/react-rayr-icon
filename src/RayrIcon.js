import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class RayrIcon extends React.Component {

    static propTypes = {
        type: PropTypes.string,
        model: PropTypes.string
    };

    static defaultProps = {
        type: 'battery',
        model: 'default'
    };

    render() {
        return (
            <i ref="rayrIcon" className={`rayr-icon rayr-icon-${this.props.model} rayr-icon-${this.props.type}`}></i>
        );
    }
}

export default RayrIcon;
