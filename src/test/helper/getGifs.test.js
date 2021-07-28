import { getGifs } from '../../helpers/getGifs';


describe('Test helper get gifs', () => {
    test('Allow length', async() => {
        const gifs = await getGifs('one punch');
        expect(gifs.length).toBe(10);
    });

    test('When dont exist category', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});