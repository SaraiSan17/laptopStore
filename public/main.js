let newSW;
if ('serviceWorker' in  navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then(result =>{
            result.addEventListener('updatefound', () => {
                newSW = result.installing;
                console.log('Hay un nuevo SW', newSW)
            })
        })
        
    })
    navigator.serviceWorker.ready.then((swRegistration)=>{
        return swRegistration.sync.register('Sincronizacion');
    }).then(function (){
        console.log('Se registro la sincronización');
    }) 
}
