

export default function Card({backgroundColor, h1, ...props }) {
  return (
    <div
      className={`${backgroundColor}  w-[300px] h-[80px] flex flex-col justify-center items-center rounded shadow-m shadow-cinza-claro gap-4 p-8`}
    >
      {h1 && <h1 className='text-branco'>{h1}</h1>}
      {props.children}
    </div>
  );
}
