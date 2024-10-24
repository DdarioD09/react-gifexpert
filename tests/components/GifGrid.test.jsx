import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests on GifGrid', () => {
    const category = 'One Punch';

    test('should show the loading', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
    });

    test('should show the images when the images are loaded by the useFetchGifs hook', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saiatama',
                url: 'https://one-punch.com/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://gbz.com/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />)

        expect(screen.getAllByRole('img').length).toBe(2)
    })
})