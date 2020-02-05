import React from 'react';

import { IconButton as IconButtonFirst } from 'test-lib-7790';
import { IconButton as IconButtonSecond } from 'test-lib-7791';

import './App.css';

function App() {
   return <div className="App">
     <div>
       <p>Fabric 7.79.0</p>
       <IconButtonFirst iconName="Windows" />
     </div>
     <div>
       <p>Fabric 7.79.1</p>
       <IconButtonSecond iconName="Windows" />
     </div>
   </div>;
}

export default App;
