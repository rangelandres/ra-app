import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// helper to check fetch status
import checkStatus from './etc/checkStatus';

// Some of our example components 
import Page from './Components/Page';
import Home from './Components/Home/home';



const siteURL = 'http://localhost:80';
const getProjects = () => {
  return new Promise((resolve, reject) => {
    const endpoint = `${siteURL}/wp-json/better-rest-endpoints/v1/projects`
fetch(endpoint)
    .then(checkStatus)
    .then(response => response.json())
    .then(projects => {
      resolve(projects);
    })
    .catch(error => console.error(error))
  })
}

const identifyComponent = (project) => {
    // this is where you map your template names to a component 
    const components = {
        'home': Home,
        'uiux': UIUX,
        'print': Print,
      'etc': ETC
    }
   // check the template from the response 
   if(project.template !== 'default' && page.template){
     return components[page.template];
   } else {
     return Page
   }
  }

  class AppInit {
    // build the app and routes with page response
    buildApp() {
    async function buildRoutes (){
      let pageList = await getPages();
      render(
        <div>
          <Router>
            <div>
              <Header />
              <Switch>
                <Route path="/" render={(props) => <Home siteURL={siteURL} {...props} />} exact />
                {pageList.map( (page, i) => {
                  let Template = identifyComponent(page)
                  let pageID = page.id;
                  let parent = page.parent;
                  return(
                    <Route
                      key={pageID}
                      path={`${parent ? '/'+parent :''}/${page.slug}`}
                      render={(props) => <Template pageID={pageID} siteURL={siteURL} {...props} />}
                      exact
                    />
                   )
                  })}
                 <Route component={NotFound} />
               </Switch>
              </div>
            </Router>
          </div>
          , document.getElementById('root')
        )
      }
      buildRoutes();
    }
  /*
   * Run the App
   */
   run() {
     this.buildApp();
   }
  }
  new AppInit().run();