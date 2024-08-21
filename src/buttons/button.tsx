export default function Button({ color,text }:{ color: string, text: string }) {
    return (
        <button className={`bg-${color}-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>{text}</button>
    )
}