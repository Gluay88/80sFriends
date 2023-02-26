import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DefinitionSearch() {
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  return (
    <form
      className="flex space-between space-x-2 max-w-[300px]"
      onSubmit={() => {
        navigate("/dictionary/" + word);
      }}
    >
      <input
        className="shrink min-w-0 px-2 py-1 rounded input-search"
        placeholder="Type here.."
        type="text"
        onChange={(e) => setWord(e.target.value)}
      />
      <button className="update text-white py-1 px-2 rounded">Seach..</button>
    </form>
  );
}
