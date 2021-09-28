import { renderRoutes } from "react-router-config";
import { NavLink } from "react-router-dom";
import { memo } from "react";
import { Top, Tab, Item } from "./style";

const Home = (props) => {
  const { route } = props;
  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected">
          <Item>推荐</Item>
        </NavLink>
        <NavLink to="/singers" activeClassName="selected">
          <Item>歌手</Item>
        </NavLink>
        <NavLink to="/rank" activeClassName="selected">
          <Item>排行榜</Item>
        </NavLink>
      </Tab>
      {/* 递归渲染子路由 */}
      {renderRoutes(route.routes)}
    </div>
  );
};

export default memo(Home);
