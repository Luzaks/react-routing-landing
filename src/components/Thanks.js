import React, { useState } from 'react';
import { useParams, useHistory, useLocation } from'react-router-dom';

const Thanks = () => {

    const history = useHistory();
    const { name } = useParams();

    console.log(history);

    return (
        <React.Fragment>
            <div className="thanks">
                <p>Thanks <strong>{name}</strong></p>
                <p>You joined <strong>{ history.location.state }</strong></p>
                <br/>
                <p><strong>Disclaimer:</strong> you will receive news.</p>
            </div>
        </React.Fragment>
    )
};

export default Thanks;