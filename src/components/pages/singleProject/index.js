import React from 'react';

const SingleProject = ({ match }) => (
    <div>
        this is the single project page {match.params.id}
    </div>
);

export default SingleProject;