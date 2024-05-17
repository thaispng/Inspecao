
export default function Button({ children, backgroundColor, onClick }) {
    return (
      <button
        className={`${backgroundColor} text-branco px-4 py-2 rounded w-full bg-laranja-laranja-primary hover:bg-laranja-laranja-secondary`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  