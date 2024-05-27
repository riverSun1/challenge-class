import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMemo } from "../../redux/modules/memos.reducer";
import { EditorComponent, Textarea } from "./MemoEditor.styled";

const MemoEditor = () => {
  let today = new Date();
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜
  const textareaRef = useRef();
  const dispatch = useDispatch();
  const { memos, selectedMemoId } = useSelector((state) => state.memos);
  const selectedMemo = memos.find((memo) => memo.id === selectedMemoId);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.value = selectedMemo ? selectedMemo.content : "";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMemoId]);

  const handleChange = (e) => {
    if (selectedMemo) {
      dispatch(updateMemo(selectedMemo.id, e.target.value));
    }
  };
  // console.log(selectedMemo);
  // console.log(selectedMemoId);
  return (
    <EditorComponent>
      <div>{`${year}년 ${month}월 ${date}일, ${today.toLocaleTimeString()}`}</div>
      <Textarea
        autoFocus
        ref={textareaRef}
        value={selectedMemo ? selectedMemo.content : ""}
        onChange={handleChange}
      />
    </EditorComponent>
  );
};

export default MemoEditor;
