// Button.jsx
export default function Button({children, type }) {
    return (
        <button className="text-branco px-4 py-2 rounded w-full bg-laranja-laranja-primary hover:bg-laranja-laranja-secondary  ">
        {children}
        </button>
    );
}