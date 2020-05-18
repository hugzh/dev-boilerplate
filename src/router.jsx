import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import routeMap from './routeMap';
import NotFound from '@comp/NotFound';
import Todo from '@/pages/Todo/todoList';

const router = () => {
  return (
    <Provider store={store}>    
      <HashRouter>
        <Switch>
          {routeMap.map((item, index) => {
            return <Route
              exact
              path={item.path}
              key={index}
              component={item.component}
            />
          })}
          {/* 未匹配到任何路由则使用通用的404错误页 */}
          <Route component={NotFound}/>
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default router;
