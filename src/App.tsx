import React from 'react';
import { Redirect, Route, Link } from 'react-router-dom';
import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator, faAnglesDown, faPager } from '@fortawesome/free-solid-svg-icons'

import './output.css';
import MoaCalculator from './pages/moa_calculator';
import Beeper from './pages/beeper';
import BulletDrop from './pages/bullet_drop';

setupIonicReact();

const App: React.FC = () => (
  <IonApp className="bg-darkbg">
    <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/moa_calculator">
            <MoaCalculator />
          </Route>
          <Route exact path="/beeper">
            <Beeper />
          </Route>
          <Route exact path="/bullet_drop">
            <BulletDrop />
          </Route>
          <Route exact path="/">
            <Redirect to="/moa_calculator" />
          </Route>
        </IonRouterOutlet>
        <div className="text-center fixed w-full bottom-2">
            <Link className="inline-block mx-4 bg-redbg px-4 py-2 inline-block text-center hover:text-darkbg" to="/moa_calculator">
              <FontAwesomeIcon className="mr-4" icon={faCalculator} />
              <IonLabel className="hover:text-darkbg">MOA Calculator</IonLabel>
            </Link>
            <Link className="inline-block mx-4 bg-redbg px-4 py-2 inline-block hover:text-darkbg" to="/bullet_drop">
              <FontAwesomeIcon className="mr-4" icon={faAnglesDown} />
              <IonLabel className="hover:text-darkbg">Bullet Drop</IonLabel>
            </Link>
            <Link className="inline-block mx-4 bg-redbg px-4 py-2 inline-block hover:text-darkbg" to="/beeper">
              <FontAwesomeIcon className="mr-4" icon={faPager} />
              <IonLabel className="hover:text-darkbg">Beeper</IonLabel>
            </Link>
        </div>
    </IonReactRouter>
  </IonApp>
);

export default App;
