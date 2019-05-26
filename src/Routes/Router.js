import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, About, Board, Login, MyBoard, MyPage } from './index';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/board" component={Board} />
        <Route path="/login" component={Login} />
        <Route path="/myboard" component={MyBoard} />
        <Route path="/mypage" component={MyPage} />
    </Switch>
);


export default Router;