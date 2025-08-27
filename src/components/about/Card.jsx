// import TextView from "./TextView";
// export default function Card({content}) {
//   return (
//      <div className="bg-black/70 p-10 rounded-2xl max-w-2xl w-full text-center shadow-lg">
//         {content}

//       <TextView content={'ddd'} />
//     </div>
//   );
// }
import TextView from "./TextView";

export default function Card({ content }) {
  return (
    <div className="bg-black/70 p-2 rounded-2xl max-w-2xl w-full text-center shadow-lg ">
      <p className="text-white mb-4">{content}</p>

      {/* You can pass dynamic content to TextView, or hardcoded like here */}
      {/* <TextView content="ddd" /> */}
    </div>
  );
}
