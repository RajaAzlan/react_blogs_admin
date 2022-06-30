import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/login';
import Blogs from '../pages/blogs';
import addBlog from '../pages/addBlogs';
const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/blogs" component={Blogs}></Route>
      <Route exact path="/add-blog" component={addBlog}></Route>
    </Switch>
  );
};

export default App;
