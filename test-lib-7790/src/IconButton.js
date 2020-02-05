import React from 'react';
import { IconButton as FabricIconButton } from 'office-ui-fabric-react';
import { string } from 'prop-types';

IconButton.propTypes = {
   iconName: string
};

function IconButton({ iconName }) {
   return (
      <FabricIconButton
         onClick={() => console.log('Click from 7.79.0')}
         iconProps={{ iconName: iconName }}
         styles={{
            root: {
               backgroundColor: '#aaa',
               border: '1px solid silver',
               color: '#000'
            }
         }}
      />
   );
}

export { IconButton };
