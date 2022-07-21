import React from 'react';
import { atom, useRecoilState } from 'recoil';

const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);
  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type='text' value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
};
const CharacterCounter = () => {
  return (
    <div>
      <TextInput />
    </div>
  );
};

export default CharacterCounter;
