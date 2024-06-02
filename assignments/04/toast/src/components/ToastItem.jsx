import { useEffect, useState } from "react";
import { useToast } from "../contexts/toast.context";

const ToastItem = ({ id, title, content, time, createdAt }) => {
  const { close } = useToast();
  const [exiting, setExiting] = useState(false); // 애니메이션 상태를 관리하기 위한 state

  useEffect(() => {
    const now = Date.now();
    const elapsedTime = now - createdAt;
    const remainingTime = Math.max(time - elapsedTime, 0); // 2개 이상의 숫자 중 가장 큰 값을 반환, 음수일 경우 0을 반환.

    const timer = setTimeout(() => {
      setExiting(true); // 종료 애니메이션 시작
      setTimeout(() => close(id), 300); // 애니메이션 시간 후에 close 함수 호출
    }, remainingTime); // 메시지의 종료 애니메이션 시작.

    return () => {
      clearTimeout(timer); // 기존 타이머를 클리어하여 중복 설정 방지
    };
  }, [time, id, close, createdAt]);

  return (
    <div
      className={`shadow-lg bg-white p-6 border rounded-lg w-[320px] transition-transform ${
        exiting ? "animate-slideOut" : "animate-slideIn"
      } flex items-center duration-500 text-sm`}
    >
      <div className="flex flex-col">
        <p className="font-bold">{title}</p>
        <p>{content}</p>
      </div>
      <button
        className="bg-black text-white border px-3 py-2 rounded-md ml-4"
        onClick={() => close(id)}
      >
        X
      </button>
    </div>
  );
};

export default ToastItem;
