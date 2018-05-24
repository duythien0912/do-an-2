import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

import LoadingCompoment from "./components/LoadingCompoment";

const AsyncUpload = Loadable({
  loader: () => import("./components/pages/UploadPage"),
  loading: LoadingCompoment
});
const AsyncHome = Loadable({
  loader: () => import("./components/pages/HomePage"),
  loading: LoadingCompoment
});
const AsyncLogin = Loadable({
  loader: () => import("./components/pages/LoginPage"),
  loading: LoadingCompoment
});
const AsyncSignUp = Loadable({
  loader: () => import("./components/pages/SignUpPage"),
  loading: LoadingCompoment
});
const AsyncGallery = Loadable({
  loader: () => import("./components/pages/GalleryPage"),
  loading: LoadingCompoment
});
const AsyncDashBoard = Loadable({
  loader: () => import("./components/pages/DashBoardPage"),
  loading: LoadingCompoment
});
const AsyncUser = Loadable({
  loader: () => import("./components/pages/UserPage"),
  loading: LoadingCompoment
});

class App extends React.Component {
  componentDidMount() {
    const ele = document.getElementById("loading_page_container");
    ele.outerHTML = "";
  }

  render(location) {	
    return (
      <Switch>
        <Route location={location} path="/" exact component={AsyncHome} />
        <Route
          location={location}
          path="/upload"
          exact
          component={AsyncUpload}
        />
        <Route location={location} path="/login" exact component={AsyncLogin} />
        <Route
          location={location}
          path="/signup"
          exact
          component={AsyncSignUp}
        />
        <Route
          location={location}
          path="/gallery"
          exact
          component={AsyncGallery}
        />
        <Route
          location={location}
          path="/dashboard"
          exact
          component={AsyncDashBoard}
        />
        <Route location={location} path="/user" exact component={AsyncUser} />
      </Switch>
    );
  }
}

export default App;
