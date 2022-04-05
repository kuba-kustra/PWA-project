

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(r) {
    console.log('ServiceWorker zarejestrowany.')
    }).catch(function(e) {
    console.log('Ups! Błąd przy rejestracji ServiceWorkera! '+e)
    });
    }