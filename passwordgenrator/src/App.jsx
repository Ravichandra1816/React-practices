import { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setLength] = useState(6);
  const [numAll, setNumAll] = useState(false);
  const [charAll, setCharAll] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAll) str += "0123456789";
    if (charAll) str += "!@#$%^&*()_{}[]`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAll, charAll, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAll, charAll, setPassword]);

  const copyPasswordClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-white mt-8">
        PASSWORD GENERATOR
      </h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-300 bg-gray-600 mt-8">
        <div className="flex shadow rounded overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="password"
            readOnly
            className="outline-none w-full py-3 px-3 bg-white text-black font-bold"
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordClipBoard}
            className="bg-blue-600 text-white px-3 py-0.5 shrink-0"
          >
            Copy{" "}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={4}
              max={100}
              value={length}
              className="cursor-pointer "
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Lenght: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              onChange={() => {
                setNumAll((prev) => !prev);
              }}
              type="checkbox"
              defaultChecked={numAll}
              id="numberInput"
              className="cursor-pointer "
            />
            <label>Number: {numAll}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              onChange={() => {
                setCharAll((prev) => !prev);
              }}
              type="checkbox"
              defaultChecked={charAll}
              id="characterInput"
              className="cursor-pointer "
            />
            <label htmlFor="characterInput ">Characters: </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
