import React, { useState } from 'react';
import MadLibsForm from './MadLibsForm';
import MadLibsResult from './MadLibsResult';

const MadLibs = () => {
  const [data, setData] = useState({ visible: false });

  const addWords = (words) => {
    setData({ ...data, ...words, visible: true });
  };

  const setVisibility = (v) => {
    setData({ ...data, visible: v });
  };

  return (
    <div>
      <h1>MadLibs!!!</h1>
      <div>
        <MadLibsForm addWords={addWords} setVisibility={setVisibility} />
      </div>
      <div>
        <MadLibsResult words={data} />
      </div>
    </div>
  );
};

export default MadLibs;
