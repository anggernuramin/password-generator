/* eslint-disable react/prop-types */

const Button = ({ handlerGenerate }) => {
  return (
    <button className="btn btn-primary w-full min-[320px]:mt-4 sm:mt-0 font-base text-lg" onClick={handlerGenerate}>
      Generate
    </button>
  );
};

export default Button;
