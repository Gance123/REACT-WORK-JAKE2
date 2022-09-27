import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { homeRoutes } from "../router/HomeRoutes";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: FC = memo(() => {
  return (
    <Switch>
      <LoginUserProvider>
        {/* ログインページルーター */}
        <Route exact path="/">
          <Login />
        </Route>

        {/* ホームページルーター */}
        <Route
          path="/home"
          render={({ match: { url } }) => (
            <Switch>
              {homeRoutes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  <HeaderLayout>{route.children}</HeaderLayout>
                </Route>
              ))}
            </Switch>
          )}
        />
      </LoginUserProvider>

      {/* 404ルーター */}
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
