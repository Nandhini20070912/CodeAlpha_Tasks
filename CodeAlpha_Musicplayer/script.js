function playPause() {
    if (!audioContext) {
        audioContext = new AudioContext();
    }

    if (playing) {
        playing = false;
        clearInterval(timer);
        playBtn.textContent = "▶";
    } else {
        audioContext.resume();
        playing = true;
        playBtn.textContent = "⏸";

        playNote();
        timer = setInterval(playNote, 500);
    }
}