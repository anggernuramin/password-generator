/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Action from "../molekul/Action";
const Layout = ({ inputText, setInputText, handlerGenerate, currentPassword, nameActive }) => {
  return (
    <div className="max-w-md">
      <h1 className="text-3xl font-semibold mb-10">React Password Generator</h1>
      <Action inputText={inputText} setInputText={setInputText} handlerGenerate={handlerGenerate} />
      <p className="mt-10 text-xl font-semibold">we'd suggest you to use this password : </p>

      {currentPassword && <h3 className="mt-5 text-4xl font-bold text-center">{`${nameActive}_${currentPassword}`}</h3>}
    </div>
  );
};

export default Layout;
