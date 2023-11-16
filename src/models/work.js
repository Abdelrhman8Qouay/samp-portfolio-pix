// add the audio for any where in the page'
// export const sendingSound = ()=> new Audio(
//     getImageUrl("assets/audios/notificationSending.mp3")
// );

export function getImageUrl(urlName) {
    return new URL(`../${urlName}`, import.meta.url).href;
}

export function makeNoScroll(ifTrue) {
    if(ifTrue) {
        document.body.classList.add('noscroll');
    } else {
        document.body.classList.remove('noscroll');
    }
}