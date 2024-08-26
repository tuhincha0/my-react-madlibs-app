import React, { useState } from 'react';
import MadlibForm from './MadlibForm';
import MadlibStory from './MadlibStory';
import StorySelector from './StorySelector';

function Madlib() {
    const [storyData, setStoryData] = useState(null);

    const handleFormSubmit = (formData) => {
        setStoryData(formData);
    };

    const handleRestart = () => {
        setStoryData(null);
    };

    return (
        <div>
            {storyData ? (
                <MadlibStory storyData={storyData} onRestart={handleRestart} />
            ) : (
                <>
                    <StorySelector />
                    <MadlibForm onFormSubmit={handleFormSubmit} />
                </>
            )}
        </div>
    );
}

export default Madlib;
