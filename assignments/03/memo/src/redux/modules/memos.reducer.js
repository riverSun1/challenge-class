import { v4 as uuidv4 } from "uuid";

let today = new Date();

// action value
export const CREATE_MEMO = "CREATE_MEMO";
export const UPDATE_MEMO = "UPDATE_MEMO";
export const SELECT_MEMO = "SELECT_MEMO";
export const DELETE_MEMO = "DELETE_MEMO";

// 컴포넌트에서 사용할 수 있도록 action creator 만들어서 export
// Action Creators
export const createMemo = (id, content) => {
  return {
    type: CREATE_MEMO,
    payload: {
      id: id, // UUID 라이브러리를 사용하여 고유한 ID 생성
      content: content, // 전달받은 content를 payload에 저장
      updatedAt: new Date().toLocaleTimeString(), // 현재 시간을 가져와 updatedAt에 저장
    },
  };
};

export const updateMemo = (id, content) => {
  return {
    type: UPDATE_MEMO,
    payload: {
      id: id, // 수정할 메모의 ID
      content: content, // 수정된 내용
      updatedAt: new Date().toLocaleTimeString(), // 수정된 시간
    },
  };
};

export const selectMemo = (id) => {
  return {
    type: SELECT_MEMO,
    payload: id, // 선택된 메모의 ID
  };
};

export const deleteMemo = (id) => {
  return {
    type: DELETE_MEMO,
    payload: id, // 삭제할 메모의 ID
  };
};

const initialMemoId = uuidv4(); // 초기 메모 ID 생성

// state init
const initialState = {
  memos: [
    {
      id: initialMemoId, // 초기 메모의 ID
      content: "react를 배워봅시다.", // 초기 메모의 내용
      updatedAt: today.toLocaleTimeString(), // 초기 메모가 생성된 시간
    },
  ],
  selectedMemoId: initialMemoId, // 초기 선택된 메모의 ID를 초기 메모의 ID로 설정
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MEMO:
      // 새로운 메모를 추가하는 경우
      return {
        ...state,
        selectedMemoId: action.payload.id, // 추가된 메모를 선택된 메모로 설정
        memos: [...state.memos, action.payload], // 새로운 메모를 추가
      };

    case UPDATE_MEMO:
      // 메모를 업데이트하는 경우
      return {
        ...state,
        memos: state.memos.map((memo) =>
          memo.id === action.payload.id
            ? {
                ...memo,
                content: action.payload.content, // 내용을 업데이트된 내용으로 변경
                updatedAt: action.payload.updatedAt, // 시간을 현재 시간으로 변경
              }
            : memo
        ),
      };

    case SELECT_MEMO:
      // 메모를 선택하는 경우
      // console.log(action.payload);
      return { ...state, selectedMemoId: action.payload.id }; // 선택된 메모의 ID를 변경

    case DELETE_MEMO:
      // 메모를 삭제하는 경우
      return {
        ...state,
        memos: state.memos.filter((memo) => memo.id !== action.payload), // 삭제할 메모를 제외하고 새로운 메모 배열 생성
        selectedMemoId: state.memos.length > 0 ? state.memos[0].id : null, // 삭제 후에 선택된 메모의 ID를 변경
        // selectedMemoId: state.memos[0].id,
      };

    default:
      return state;
  }
};

export default Reducer;
