// add the audio for any where in the page'
// export const sendingSound = ()=> new Audio(
//     getImageUrl("assets/audios/notificationSending.mp3")
// );

export function getImageUrl(urlName) {
    return new URL(`../${urlName}`, import.meta.url).href;
}