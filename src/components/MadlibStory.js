import React from 'react';

function MadlibStory({ storyData, onRestart }) {
    return (
        <div>
            <p>
                Once upon a time, there was a {storyData.adjective} {storyData.noun} who loved to {storyData.verb} {storyData.adverb}.
            </p>
            <button onClick={onRestart}>Restart</button>
        </div>
    );
}

export default MadlibStory;
