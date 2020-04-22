import React, { useState } from 'react';

const MadLibsForm = ({ addWords, setVisibility }) => {
  //state
  const [words, setWords] = useState({
    noun1: '',
    noun2: '',
    adj: '',
    color: '',
  });

  //form handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    //prevent form submission if any field is empty
    if (Object.values(words).indexOf('') !== -1) {
      setVisibility(false);
      return;
    }
    addWords(words);
  };

  const clearForm = e => {
    e.preventDefault();
    setWords({noun1:'', noun2:'', adj:'', color:'', visible:false});
    setVisibility(false);
  }

  //render
  return (
    <div>
      <h4>Fill in the words:</h4>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='noun'
          value={words.noun1}
          onChange={(e) => setWords({ ...words, noun1: e.target.value })}
        /><br/>
        <input
          type='text'
          placeholder='noun'
          value={words.noun2}
          onChange={(e) => setWords({ ...words, noun2: e.target.value })}
        /><br/>
        <input
          type='text'
          placeholder='adjective'
          value={words.adj}
          onChange={(e) => setWords({ ...words, adj: e.target.value })}
        /><br/>
        <input
          type='text'
          placeholder='color'
          value={words.color}
          onChange={(e) => setWords({ ...words, color: e.target.value })}
        />
        <p><button>What's My Story?</button> <button onClick={clearForm}>Start Over</button></p>
      </form>
    </div>
  );
};

export default MadLibsForm;
