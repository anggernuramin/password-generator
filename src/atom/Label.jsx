/* eslint-disable react/prop-types */

const Label = ({ label, name }) => {
  return (
    <label className="font-semibold text-base" htmlFor={label}>
      {name}
    </label>
  );
};

export default Label;
