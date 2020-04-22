import React from 'react';

const MadLibsResult = ({ words }) => {
  const { noun1, noun2, adj, color, visible } = words;
  console.log(visible);
  return (
    <div>
      { visible
        ? <>
          <h3>Result:</h3>
            <h2>The {adj} {noun1} enjoyed a nice {color} {noun2}.</h2>
          </>
        : undefined }
    </div>
  );
};

export default MadLibsResult;