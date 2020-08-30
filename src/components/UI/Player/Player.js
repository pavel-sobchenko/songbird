import React from "react";
import "./Player.scss"
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import 'react-h5-audio-player/src/styles.scss'

const Player = props => {
    return (
        <AudioPlayer
            src={props.audio}
            customProgressBarSection={
                [
                    RHAP_UI.MAIN_CONTROLS,
                    RHAP_UI.CURRENT_TIME,
                    RHAP_UI.PROGRESS_BAR,
                    RHAP_UI.DURATION
                ]
            }
            showJumpControls={false}
            customControlsSection={[RHAP_UI.VOLUME]}
            autoPlayAfterSrcChange={false}
        />
    )
}

export default Player
