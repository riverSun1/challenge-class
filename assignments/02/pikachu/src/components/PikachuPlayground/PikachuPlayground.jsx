import { useEffect, useState } from "react";
import "./PikachuPlayground.css";

const PikachuPlayground = () => {
  const [position, setPosition] = useState({ x: 4, y: 4 }); // 피카츄의 초기 위치
  const [direction, setDirection] = useState("right"); // 피카츄의 초기 방향
  const [isJumping, setIsJumping] = useState(false); // 피카츄가 점프 중인지 여부

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp": // 위쪽 화살표 키를 누를 때
          setPosition((pos) => ({ ...pos, y: Math.max(pos.y - 1, 0) })); // "pos.y - 1"이 0보다 크다면 그 값을 반환하고, 0보다 작다면 0을 반환. 피카츄가 맵의 경계선을 넘지 않도록 보장.
          break;
        case "ArrowDown": // 아래쪽 화살표 키를 누를 때
          setPosition((pos) => ({ ...pos, y: Math.min(pos.y + 1, 9) }));
          break;
        case "ArrowLeft": // 왼쪽 화살표 키를 누를 때
          setPosition((pos) => ({ ...pos, x: Math.max(pos.x - 1, 0) }));
          setDirection("left"); // 피카츄를 왼쪽으로 향하게 함
          break;
        case "ArrowRight": // 오른쪽 화살표 키를 누를 때
          setPosition((pos) => ({ ...pos, x: Math.min(pos.x + 1, 9) }));
          setDirection("right"); // 피카츄를 오른쪽으로 향하게 함
          break;
        case " ": // 스페이스바를 누를 때 점프
          setIsJumping(true);
          setTimeout(() => setIsJumping(false), 300); // 300ms 후에 점프 상태 해제
          break;
        default:
          break;
      }
    };

    // cleanup() : 컴포넌트가 언마운트될 때 실행
    // 이벤트 리스너를 제거하여 메모리 누수를 방지하고, 불필요한 이벤트 호출을 막음.
    window.addEventListener("keydown", handleKeyDown); // keydown 이벤트가 발생할 때마다 handleKeyDown 함수를 호출하도록 이벤트 리스너를 설정
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="playground">
      <div
        className={`pikachu ${direction} ${isJumping ? "jump" : ""}`}
        // 부모 요소의 상단에서 10%, 왼쪽에서 10% 떨어진 위치에 배치
        style={{ top: `${position.y * 10}%`, left: `${position.x * 10}%` }}
      ></div>
    </div>
  );
};

export default PikachuPlayground;
