export default function Button({ color,children }:{ color: string, children: string }) {
    return (
        <button className={`bg-${color}-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>{children}</button>
    )
}