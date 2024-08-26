import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MadlibForm from '../src/components/MadlibForm';

describe('MadlibForm component', () => {
    test('renders inputs and submits the form', () => {
        const handleFormSubmit = jest.fn();
        render(<MadlibForm onFormSubmit={handleFormSubmit} />);
        
        fireEvent.change(screen.getByPlaceholderText(/Noun/i), { target: { value: 'cat' } });
        fireEvent.change(screen.getByPlaceholderText(/Verb/i), { target: { value: 'jump' } });
        fireEvent.change(screen.getByPlaceholderText(/Adjective/i), { target: { value: 'furry' } });
        fireEvent.change(screen.getByPlaceholderText(/Adverb/i), { target: { value: 'gracefully' } });

        fireEvent.click(screen.getByText(/Create Story/i));

        expect(handleFormSubmit).toHaveBeenCalledWith({
            noun: 'cat',
            verb: 'jump',
            adjective: 'furry',
            adverb: 'gracefully'
        });
    });

    test('prevents form submission if any field is empty', () => {
        const handleFormSubmit = jest.fn();
        render(<MadlibForm onFormSubmit={handleFormSubmit} />);
        
        fireEvent.change(screen.getByPlaceholderText(/Noun/i), { target: { value: '' } });
        fireEvent.click(screen.getByText(/Create Story/i));

        expect(handleFormSubmit).not.toHaveBeenCalled();
    });
});
