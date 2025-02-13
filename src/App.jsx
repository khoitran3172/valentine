import { useState } from "react";
import a from "./assets/bear-kiss-bear-kisses.gif";

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
          <img src={a}  alt="GIF Animation"/>
          <div className="text-4xl md:text-6xl font-bold my-4">
            iu vợ iu nhiều nha!!!
          </div>
        </>
      ) : (
        <>

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

};
