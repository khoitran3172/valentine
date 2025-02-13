import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 10 +20;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Hông thích! >.<",
      "Dợ iu ơi, nghĩ lại đi nè~",
      "I mà nghĩ lại đi, nhaa~?",
      "Năn nỉ lun á, chọn 'Có' đi mà~!",
      "Lần cuối năn nỉ luôn nè! 🥺",
      "Thiệt hả? Không đùa chứ?",
      "Suy nghĩ lại đi, hối hận đó nha~",
      "Cho tớ một cơ hội nữa đi mà~",
      "Cậu chắc chắn chưa đó? 😢",
      "Sai lầm lớn đó nhaaa!",
      "Đừng nhẫn tâm vậy mà~",
      "Hông lẽ từ chối thiệt sao? 🥺",
      "Đổi ý không nè? UwU",
      "Suy nghĩ lại lần nữa đi, nhaa~",
      "Đây là quyết định cuối cùng luôn hả? 😭",
      "Cậu làm tim tớ tan nát rồi nè... 💔",
      "Một lần nữa thôi màaa~ 🥺",
      "Làm ơn đi màaa :( tớ buồn lắm đó~",
    ];
    return phrases[Math.floor(Math.random() * phrases.length)];
  };
  

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            iu vợ iu nhiều nha!!!
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Valentine này, cậu chịu làm Valentine của tớ hông nè~? 💖🥺"
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Dạ có ạaaaa  ❤️
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "hong thíc " : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="https://github.com/Xeven777/valentine"
      target="__blank"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};
