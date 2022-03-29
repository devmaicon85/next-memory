export const formatTimeElapsed = (secounds: number) => {
    let minutes = Math.floor(secounds / 60);

    secounds -= minutes * 60;

    let minString = minutes < 10 ? "0" + minutes : minutes;
    let secString = secounds < 10 ? "0" + secounds : secounds;

    return minString + ":" + secString;
};
