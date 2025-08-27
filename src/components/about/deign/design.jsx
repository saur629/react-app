// src/Login.jsx
 function card({heading, des, buttonName}) {
  return (
    <div>
      <p className="text-sm text-red-800 ">{heading}</p>
      <p>{des}</p>
      <button>{buttonName}</button>
    </div>
  );
}

export default card;