import { useState } from "react";

const getRandomTarget = () => Math.floor(Math.random() * 100) + 1;

const NumberGuessGame = () => {
  const [target, setTarget] = useState(getRandomTarget);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [isWin, setIsWin] = useState(false);
  const [history, setHistory] = useState([]);

  const handleGuess = () => {
    console.log("타겟:", target);

    const num = Number(guess);

    if (isNaN(num) || num < 1 || num > 100) {
      setMessage("🚧 1부터 100 사이의 숫자를 입력하세요.");
      return;
    }

    setHistory([...history, num]);

    if (num === target) {
      setMessage(`🎊 정답! ${target} 입니다.🎊`);
      setIsWin(true);
    } else if (num < target) {
      setMessage("⬆️ 더 큰 수를 입력하세요.");
    } else {
      setMessage("⬇️ 더 작은 수를 입력하세요.");
    }

    setGuess("");
  };

  console.log(target);

  const handleRestart = () => {
    setTarget(getRandomTarget());
    setMessage("");
    setIsWin(false);
    setHistory([]);
  };

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-xl max-w-md">
      <h1 className="text-3xl font-bold text-center mb-4">
        🏹숫자 맞추세요!!!
      </h1>
      <input
        className="border border-gray-300 rounded-lg p-2 mb-4 w-40 text-center focus:outline-none"
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={isWin}
      />
      <button
        className="bg-blue-400 text-blue-550 text-amber-50 px-6 py-2 hover:bg-blue-950 rounded-lg disabled:opacity-50"
        onClick={handleGuess}
        disabled={isWin}
      >
        맞추기
      </button>
      <p className="text-gray-500 mt-4 text-lg font-medium">{message}</p>
      <div className="w-full">
        <h2 className="font-semibold mb-2">입력 기록</h2>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {history.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      </div>
      {isWin && (
        <button
          className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          onClick={handleRestart}
        >
          다시 시작하기
        </button>
      )}
    </div>
  );
};

export default NumberGuessGame;
