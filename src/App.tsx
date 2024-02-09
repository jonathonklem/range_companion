import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';

import './output.css';
import MoaCalculator from './pages/moa_calculator';

setupIonicReact();

const App: React.FC = () => (
  <IonApp className="bg-darkbg">
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/moa_calculator">
            <MoaCalculator />
          </Route>
          <Route exact path="/tab2">
            
          </Route>
          <Route path="/tab3">
           
          </Route>
          <Route exact path="/">
            <Redirect to="/moa_calculator" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar className="bg-redbg" slot="bottom">
          <IonTabButton tab="tab1" href="/moa_calculator">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>MOA Calculator</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/bullet_drop">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Bullet Drop</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/group_checker">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Group Checker</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/beeper">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Beeper</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
