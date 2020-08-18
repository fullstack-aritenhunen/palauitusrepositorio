import React from 'react';

const Filter = (props) => {
    const arvo = props.filter
    const onChange = props.onChange
    return (
        <div>
            filter shown with: <input
            value={arvo}
            onChange={onChange} />
        </div>
    )
}

export default Filter