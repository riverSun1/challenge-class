import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { createMemo, deleteMemo } from "../../redux/modules/memos.reducer";
import MemoListItem from "../MemoListItem/MemoListItem";
import { Button, ButtonDiv, MemoListComponent } from "./MemoList.styled";

const MemoList = () => {
  let created = new Date();
  const { memos } = useSelector((state) => state.memos);
  const selectedMemoId = useSelector((state) => state.memos.selectedMemoId);
  const dispatch = useDispatch();
  // console.log(memos);
  // console.log(selectedMemoId);

  const handleClickCreateMemo = () => {
    dispatch(
      createMemo({
        id: uuidv4(),
        content: "",
        updatedAt: created.toLocaleTimeString(),
      })
    );
  };

  const handleClickDeleteMemo = () => {
    if (selectedMemoId) {
      dispatch(deleteMemo(selectedMemoId));
    }
  };

  const sortedMemos = useMemo(
    () => [...memos].sort((memoA, memoB) => memoB.updatedAt - memoA.updatedAt),
    [memos]
  );

  return (
    <MemoListComponent>
      <ButtonDiv>
        <Button onClick={handleClickCreateMemo}>새 메모 작성하기 </Button>
        <Button onClick={handleClickDeleteMemo}>삭제</Button>
      </ButtonDiv>
      <hr />
      {sortedMemos.map((memo) => (
        <MemoListItem key={uuidv4()} memo={memo} />
      ))}
    </MemoListComponent>
  );
};

export default MemoList;
