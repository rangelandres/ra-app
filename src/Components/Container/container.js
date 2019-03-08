import React  from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";


import Home from '../Home/home';
import Resume from '../Resume/resume';
import Contact from '../Contact/contact';

import './container.css';

function Container({ location }) {
  return (
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/resume" component={Resume} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
  );
}


export default withRouter(Container);
