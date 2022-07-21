import React from 'react';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

const TextInput = () => {
  const count = useRecoilValue(charCountState);
  const [text, setText] = useRecoilState(textState);
  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type='text' value={text} onChange={onChange} />
      <br />
      Echo: {text}
      <br />
      CharacterCount: {count}
    </div>
  );
};

export default TextInput;
