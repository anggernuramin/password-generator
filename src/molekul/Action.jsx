/* eslint-disable react/prop-types */
import Input from "../atom/Input";
import Button from "../atom/Button";
import Label from "../atom/Label";
const Action = ({ inputText, setInputText, handlerGenerate }) => {
  return (
    <>
      <Label name="username" label="name" />
      <Input inputText={inputText} setInputText={setInputText} name="name" />
      <Button handlerGenerate={handlerGenerate} />
    </>
  );
};

export default Action;
