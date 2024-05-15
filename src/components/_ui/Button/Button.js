// Button.jsx
export default function Button({children, type }) {
    return (
        <button className="bg-laranja-primary text-branco px-4 py-2 rounded w-full hover:bg-laranja-secondary  ">
        {children}
        </button>
    );
}