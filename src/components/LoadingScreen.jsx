import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = ["<Hello World/>", "Console.log()", "Crazy? I was crazy once.", '"Do you believe in gravity between individuals?" - Dio Brando', '"Wake me, when you need me." - Master Chief', '"Do, or do not, there is no try" - Yoda'];

  useEffect(() => {
    let index = 0;
    let randomText = Math.floor(Math.random() * fullText.length)
    const interval = setInterval(() => {
      setText(fullText[randomText].substring(0, index));
      index++;

      if (index > fullText[randomText].length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 100);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-2xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>
      <div className="w-[300px] h-[2px] bg-gray-800 rounded -relative overflow-hidden">
        <div className="w-[40%] h-full bg-purple-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
          {""}
        </div>
      </div>
    </div>
  );
};
