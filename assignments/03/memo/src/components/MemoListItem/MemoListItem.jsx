import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { selectMemo } from "../../redux/modules/memos.reducer";
import { Wrapper } from "./MemoListItem.styled";

const MemoListItem = ({ memo }) => {
  const { content, updatedAt } = memo; // memo 객체로부터 title과 updatedAt을 추출
  // console.log(memo);

  const dispatch = useDispatch();

  // console.log(selectedMemoId);

  const handleClick = () => {
    // const action = { type: SELECT_MEMO, payload: { id: memo.id } };
    // dispatch(selectMemo(action));
    dispatch(selectMemo({ id: memo.id }));

    // console.log(selectedMemoId);
  };

  // const selectedMemoId = useSelector((state) => state.memos);
  const selectedMemoId = useSelector((state) => state.memos.selectedMemoId);
  // console.log("==>", selectedMemoId);

  return (
    <Wrapper $isSelected={selectedMemoId === memo.id} onClick={handleClick}>
      <div>{content}</div>
      <div>{updatedAt}</div>
    </Wrapper>
  );
};

MemoListItem.propTypes = {
  memo: PropTypes.object,
};

export default MemoListItem;
