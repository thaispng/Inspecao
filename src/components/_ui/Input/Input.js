export default function Input ({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className=" border-cinza-claro rounded px-2 py-1 border-2 w-full focus:outline-none focus:border-laranja-primary text-preto transition-all duration-500 ease-in-out"
    />
  );
}