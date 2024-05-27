

export default function Card({ h1, ...props }) {
  return (
    <div
      className= 'bg-[#fff] border border-slate-200 w-[400px] h-[100px] flex flex-row justify-center items-center rounded shadow-sm shadow-cinza-claro gap-4 p-8'
    >
      {h1 && <h1 className='text-neutral-500 text-lg w-full'>{h1}</h1>}
      {props.children}
    </div>
  );
}
