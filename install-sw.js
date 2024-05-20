if ('serviceWorker' in navigator) {

    window.addEventListener('load', async () => {

        try {
            await navigator.serviceWorker.register('/camera-html/sw.js')
        }
        catch (error) {
            console.log('Algo deu errado: ', error)
        }
    })
}
