export default function Card({content}) {
  return (
     <div className="bg-black/70 p-10 rounded-2xl max-w-2xl w-full text-center shadow-lg">
        {content}
    </div>
  );
}