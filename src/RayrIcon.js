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

        let _cls = `rayr-icon-${this.props.model || 'default'} rayr-icon-${this.props.type}`;

        return (
            <i ref="rayrIcon" className={`rayr-icon ${_cls}`}></i>
        );
    }
}

export default RayrIcon;
