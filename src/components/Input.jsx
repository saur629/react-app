export default function Card({type, placeholder}) {
  return (
     <input
        type="{type}"
        placeholder="{placeholder}"
        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
    />
  );
}