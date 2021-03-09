import React, {useEffect} from 'react'
import { NavigationContent } from './navigation'


export default function App() {
//   useEffect(() => {
//     console.log('got here')
//     let deferredPrompt;

// global.addEventListener('beforeinstallprompt', (e) => {
//   // Prevent the mini-infobar from appearing on mobile
//   e.preventDefault();
//   // Stash the event so it can be triggered later.
//   deferredPrompt = e;
//   // Update UI notify the user they can install the PWA
//   showInstallPromotion();
//   // Optionally, send analytics event that PWA install promo was shown.
//   console.log(`'beforeinstallprompt' event was fired.`);
//   console.log('herhehehe', e)
// });
//   })
  return (
      <NavigationContent/>
  );
}


