import { useContext } from "react";
import { Name} from "../about/information/context";

export default function TextView({ content }) {
  const name = useContext(Name);

  return (
    <div className="bg-blue-500 p-10 rounded-2xl max-w-2xl w-full text-center shadow-lg">
      <p>{content}</p>
      <p>{name}</p>
    </div>
  );
}
