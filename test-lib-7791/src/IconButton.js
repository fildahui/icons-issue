import React from 'react';
import { IconButton as FabricIconButton } from 'office-ui-fabric-react';
import { string } from 'prop-types';

IconButton.propTypes = {
   iconName: string
};

function IconButton({ iconName }) {
   return (
      <FabricIconButton
         onClick={() => console.log('Click from 7.79.1')}
         iconProps={{ iconName: iconName }}
      />
   );
}

export { IconButton };
