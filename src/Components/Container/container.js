import React  from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";


import Home from '../Home/home';
import Resume from '../Resume/resume';

import './container.css';

function Container({ location }) {
  return (
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          unmountOnExit
          timeout={{ enter: 400, exit: 400 }}
          classNames="fade"
          onExit={node => {
            node.style.position = "absolute";
            node.style.top = -1 * window.scrollY + "px";
          }}
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/resume" component={Resume} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
  );
}


export default withRouter(Container);
