import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Madlib from '../src/components/Madlib';

describe('Madlib component', () => {
    test('renders Madlib form initially', () => {
        render(<Madlib />);
        expect(screen.getByPlaceholderText(/Noun/i)).toBeInTheDocument();
    });

    test('submits form and displays story', () => {
        render(<Madlib />);
        
        fireEvent.change(screen.getByPlaceholderText(/Noun/i), { target: { value: 'dog' } });
        fireEvent.change(screen.getByPlaceholderText(/Verb/i), { target: { value: 'run' } });
        fireEvent.change(screen.getByPlaceholderText(/Adjective/i), { target: { value: 'happy' } });
        fireEvent.change(screen.getByPlaceholderText(/Adverb/i), { target: { value: 'quickly' } });
        
        fireEvent.click(screen.getByText(/Create Story/i));
        
        expect(screen.getByText(/Once upon a time/i)).toBeInTheDocument();
        expect(screen.getByText(/dog/i)).toBeInTheDocument();
        expect(screen.getByText(/run/i)).toBeInTheDocument();
        expect(screen.getByText(/happy/i)).toBeInTheDocument();
        expect(screen.getByText(/quickly/i)).toBeInTheDocument();
    });

    test('restarts the game', () => {
        render(<Madlib />);

        fireEvent.change(screen.getByPlaceholderText(/Noun/i), { target: { value: 'dog' } });
        fireEvent.change(screen.getByPlaceholderText(/Verb/i), { target: { value: 'run' } });
        fireEvent.change(screen.getByPlaceholderText(/Adjective/i), { target: { value: 'happy' } });
        fireEvent.change(screen.getByPlaceholderText(/Adverb/i), { target: { value: 'quickly' } });
        
        fireEvent.click(screen.getByText(/Create Story/i));

        fireEvent.click(screen.getByText(/Restart/i));

        expect(screen.getByPlaceholderText(/Noun/i)).toBeInTheDocument();
    });
});
