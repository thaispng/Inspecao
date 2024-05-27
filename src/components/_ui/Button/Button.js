
export default function Button({ children, backgroundColor, onClick, rounded, width }) {
    return (
      <button 
        className={`${backgroundColor} ${rounded} ${width} flex flex-row justify-center items-center  px-4 py-2  bg-laranja-laranja-primary hover:bg-laranja-laranja-secondary`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  