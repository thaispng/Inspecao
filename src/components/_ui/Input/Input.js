export default function Input({ type, placeholder, value, onChange, name }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className=" border-basic-cinza-medio
      rounded 
      px-2 
      py-1 
      border-2
      w-full 
      focus:outline-none 
      focus:border-laranja-laranja-primary
      text-basic-preto
      font-medium 
      text-base

      "
    />
  );
}
