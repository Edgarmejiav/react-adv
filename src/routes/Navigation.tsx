import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import {
  FormikAbstraction,
  FormikBasicPage,
  FormikComponents,
  FormikYupage,
  RegisterPage,
} from "../03-forms/pages/index";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/" activeClassName="nav-active" exact>
                Registerpage
              </NavLink>
            </li>
            <li>
              <NavLink to="/FormikBasicPage" activeClassName="nav-active" exact>
                FormikBasicPage
              </NavLink>
            </li>
            <li>
              <NavLink to="/FormikYupage" activeClassName="nav-active" exact>
                FormikYupage
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/FormikComponents"
                activeClassName="nav-active"
                exact
              >
                FormikComponents
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/FormikAbstraction"
                activeClassName="nav-active"
                exact
              >
                FormikAbstraction
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/FormikAbstraction">
            <FormikAbstraction></FormikAbstraction>
          </Route>
          <Route path="/FormikComponents">
            <FormikComponents></FormikComponents>
          </Route>
          <Route path="/FormikYupage">
            <FormikYupage></FormikYupage>
          </Route>
          <Route path="/FormikBasicPage">
            <FormikBasicPage />
          </Route>
          <Route path="/">
            <RegisterPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
