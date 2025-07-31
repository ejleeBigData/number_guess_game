import { useState } from "react";

const getRandomTarget = () => Math.floor(Math.random() * 10) + 1;

const NumberGuessGame = () => {
  const [target, setTarget] = useState(getRandomTarget);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  const handleGuess = () => {
    console.log("타겟:", target);

    const num = Number(guess);

    if (isNaN(num) || num < 1 || num > 10) {
      console.log("🚧 1부터 10 사이의 숫자를 입력하세요.");
      return;
    }

    if (num === target) {
      setMessage(`🎊 정답! ${target} 입니다.🎊`);
    } else if (num < target) {
      setMessage("⬆️ 더 큰 수를 입력하세요.");
    } else {
      setMessage("⬇️ 더 작은 수를 입력하세요.");
    }
  };

  console.log(target);

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-xl max-w-md">
      <h1 className="text-3xl font-bold text-center mb-4">
        🏹숫자 맞추세요!!!
      </h1>
      <p className="text-center mb-4">1️⃣ ~ 🔟 사이의 숫자를 맞추세요.</p>

      <input
        className="border border-gray-300 rounded-lg p-2 mb-4 w-40 text-center focus:outline-none"
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button
        className="bg-blue-400 text-blue-550 text-amber-50 px-6 py-2 hover:bg-blue-950 rounded-lg"
        onClick={handleGuess}
      >
        맞추기
      </button>

      <p className="text-gray-500 mt-4 text-lg font-medium">{message}</p>
    </div>
  );
};

export default NumberGuessGame;
