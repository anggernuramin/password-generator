/* eslint-disable react/prop-types */

const Input = ({ inputText, setInputText, name }) => {
  return (
    <input
      type="text"
      placeholder="Input text here ....  "
      className="input input-bordered input-primary w-full bg-white mb-10 mt[2px]"
      onChange={(e) => setInputText(e.target.value)}
      value={inputText ? inputText : ""}
      name={name}
      id={name}
    />
  );
};

export default Input;
