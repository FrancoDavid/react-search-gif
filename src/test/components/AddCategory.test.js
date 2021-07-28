import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';
import React from 'react';

describe('Test add category component', () => {
    const setCategorias = jest.fn();
    let component = shallow(<AddCategory setCategorias={setCategorias}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        component = shallow(<AddCategory setCategorias={setCategorias}/>);
    });

    test('show correctly', () => {
        expect(component).toMatchSnapshot();
    });

    // test('input changes correctly', () => {
    //     const input = component.find('input');
    //     const value = 'labios de ruby';
    //     input.simulate('change', {target: value});
    //     console.log(input.props());
    //     // expect(input.prop('value')).toBe(value);
    // });

    test('validate form not submit', () => {
        component.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategorias).not.toHaveBeenCalled();
    });


    test('set categories should be called and value input should be clean', () => {
        const value = 'Hola mundo';
        component.find('input').simulate('change', {target: {value}});
        component.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategorias).toHaveBeenCalled();
        expect(component.find('input').prop('value')).toBe('');
    });
});
