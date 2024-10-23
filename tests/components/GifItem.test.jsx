import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem"

describe('Tests on GifItem.test', () => {

    const title = 'Genos';
    const url = 'https://one-punch.com/genos.jpg';

    test('should match with the snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    })

    test('should show the image and ALT provided', () => {
        render(<GifItem title={title} url={url} />);
        // expect(screen.getByRole('img').src).toBe(url);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('should show the title in the component', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })
})