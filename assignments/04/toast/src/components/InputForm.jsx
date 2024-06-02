import { useState } from "react";
import { useToast } from "../contexts/toast.context";

const InputForm = () => {
  const toast = useToast();

  const [title, setTitle] = useState("튜터님 강의듣기");
  const [content, setContent] = useState("월요일, 수요일 (오후3시)");
  const [time, setTime] = useState(+2000);

  const handleSubmit = () => {
    toast.open({ title, content, time });
  };

  return (
    <div className="flex flex-col gap-y-6 items-center">
      <h2 className="text-2xl font-semibold text-center">🍞토스트 컨트롤러</h2>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-1.5 items-start">
          <label htmlFor="title">제목(필수)</label>
          <input
            className="border px-4 py-2.5 rounded-md w-80"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-1.5 items-start">
          <label htmlFor="content">내용(필수) </label>
          <input
            className="border px-4 py-2.5 rounded-md w-80"
            type="text"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-1.5 items-start">
          <label htmlFor="time">노출 시간(ms) (선택)</label>
          <input
            className="border px-4 py-2.5 rounded-md w-80"
            type="number"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="bg-black text-white py-3 text-[15px] rounded-md font-medium hover:bg-black/80 transition active:bg-black/70"
          onClick={handleSubmit}
        >
          토스트 띄우기
        </button>
      </div>
    </div>
  );
};

export default InputForm;
