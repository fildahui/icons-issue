import {
   registerIcons,
   setIconOptions
} from 'office-ui-fabric-react/lib/Styling';

const registerComponentIcons = () => {
   setIconOptions({ disableWarnings: true });

   registerIcons({
      style: {
         MozOsxFontSmoothing: 'grayscale',
         WebkitFontSmoothing: 'antialiased'
      },
      fontFace: {
         fontFamily: `"Font Awesome 5 Brands"`,
         fontStyle: 'normal',
      },
      icons: {
         ArrowUpCircle: '\uf35b',
         Windows: '\uf17a'
      }
   });

   setIconOptions({ disableWarnings: false });
};

registerComponentIcons();
