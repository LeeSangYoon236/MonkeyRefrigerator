import axios from "axios";
import { baseUrl } from "./BaseUrl";
// console.log(baseUrl);

//board API -- 조회순 첫번째 목록
export const findBoardAll = (token) => {
  console.log(token);
  const result = axios.get(baseUrl + "board", {
    headers: {
      accessToken: token,
    },
  });
  return result;
};

//board API -- 조회순 첫번째 이후 목록
export const findBoardAllAfter = (page) => {
  const result = axios.get(baseUrl + "board/page", {
    params: {
      id: page.id,
      createAt: page.createAt,
    },
  });
  return result;
};

export const findBoardDetail = async (boards) => {
  const result = await axios.get(baseUrl + "board/detail", {
    params: {
      id: boards,
    },
  });
  return result;
};

//board category API -- 카테고리 목록 조회
export const findBoardCategory = () => {
  const result = axios.get(baseUrl + "board/category");
  return result;
};
