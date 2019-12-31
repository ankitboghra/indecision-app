import React from 'react';

const Action = (props) => (
    <div>
        <button disabled={!props.hasOptions} onClick={props.pickOne}>What should I do?</button>
    </div>
);

export default Action;