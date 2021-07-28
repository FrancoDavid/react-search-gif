import { shallow } from "enzyme";
import GifItem from "../../components/GifItem";
import React from 'react';

describe('Test Gif Item', () => {
    const obj_image = {
        title: 'Holamundo',
        gif: 'http://localhost'
    };
    const wrapper = shallow(<GifItem image={obj_image}/>);

    test('Show correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('props of image/gif', () => {
        const img = wrapper.find('img');

        expect(img.props().src).toBe(obj_image.gif);

        expect(img.props().alt).toBe(obj_image.title);
    });
});