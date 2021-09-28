import styled from "styled-components";
import style from "../../assets/global-style";

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${style["theme-color"]};
  & > span {
    line-height: 40px;
    color: #f1f1f1;
    font-size: 20px;
    &.iconfont {
      font-size: 25px;
    }
  }
`;

export const Tab = styled.div`
  height: 44px;
  line-height: 44px;
  padding: 0 10px;
  display: flex;
  justify-content: space-around;
  background-color: ${style["theme-color"]};
  a {
    position: relative;
    &.selected::after {
      display: block;
      position: absolute;
      content: "";
      width: 100%;
      height: 2px;
      left: 50%;
      margin-left: -50%;
      bottom: 5px;
      background-color: #fff;
    }
  }
`;

export const Item = styled.span`
  color: #fff;
`;
