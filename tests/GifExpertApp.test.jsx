import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"


describe('Tests on <GifExpertApp/>', () => {
    test('should not include a repeated category', () => {
        render(<GifExpertApp />)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'One Punch' } });
        fireEvent.submit(form);

        expect(categories.length).toBe(1)

    })
})