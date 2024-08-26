import React, { useState } from 'react';

function MadlibForm({ onFormSubmit }) {
    const [formData, setFormData] = useState({
        noun: '',
        verb: '',
        adjective: '',
        adverb: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="noun"
                placeholder="Noun"
                value={formData.noun}
                onChange={handleChange}
            />
            <input
                type="text"
                name="verb"
                placeholder="Verb"
                value={formData.verb}
                onChange={handleChange}
            />
            <input
                type="text"
                name="adjective"
                placeholder="Adjective"
                value={formData.adjective}
                onChange={handleChange}
            />
            <input
                type="text"
                name="adverb"
                placeholder="Adverb"
                value={formData.adverb}
                onChange={handleChange}
            />
            <button type="submit">Create Story</button>
        </form>
    );
}

export default MadlibForm;
