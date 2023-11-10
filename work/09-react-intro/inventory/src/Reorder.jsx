import React from 'react';

const Reorder = ({ onReorder }) => {
    return (
        <button onClick={onReorder} className="reorder-button">Reorder</button>
    );
};
export default Reorder;