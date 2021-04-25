import React from "react";
import { shallow, mount } from 'enzyme';

import CounterButton from "./CounterButton";
import Counter from "./Counter";

describe('Counter component', () => {
  it('should render correctly', () => {
    const counterWrapper = shallow(<Counter/>);

    expect(counterWrapper.find('.counter').exists()).toBeTruthy();
    expect(counterWrapper.find(CounterButton).length).toBe(4);
    expect(counterWrapper.find({ increase: true }).length).toBe(1);
    expect(counterWrapper.find({ decrease: true }).length).toBe(1);
    expect(counterWrapper.find({ reset: true }).length).toBe(1);
    expect(counterWrapper.find({ change: true }).length).toBe(1);
    expect(counterWrapper.find('#user-value').length).toBe(1);
  });

  it('should render counter with "0"', () => {
    const counterWrapper = shallow(<Counter/>);
    const counter = counterWrapper.find('.counter');

    expect(counter.text()).toBe('0');
  })

  it('should render counter with "10"', () => {
    const counterWrapper = shallow(<Counter value='10' />);
    const counter = counterWrapper.find('.counter');

    expect(counter.text()).toBe('10');
  })

  it('should button increase counter', () => {
    const counterWrapper = mount(<Counter/>);
    let counter = counterWrapper.find('.counter');
    const increaseButton = counterWrapper.find({ increase: true });
    const randomNumber = Math.floor((Math.random() * 10) + 1);

    expect(counter.text()).toBe('0');

    for (let i = 0; i < randomNumber; i++) {
      increaseButton.simulate('click');
    }

    counter = counterWrapper.find('.counter');
    expect(parseInt(counter.text())).toBe(randomNumber);
  });

  it('should button decrease counter', () => {
    const counterWrapper = mount(<Counter/>);
    let counter = counterWrapper.find('.counter');
    const decreaseButton = counterWrapper.find({ decrease: true });
    const randomNumber = Math.floor((Math.random() * 10) + 1);

    expect(counter.text()).toBe('0');

    for (let i = 0; i < randomNumber; i++) {
      decreaseButton.simulate('click');
    }

    counter = counterWrapper.find('.counter');
    expect(parseInt(counter.text())).toBe(-randomNumber);
  });

  it('should button reset counter', () => {
    const counterWrapper = mount(<Counter/>);
    let counter = counterWrapper.find('.counter');
    const increaseButton = counterWrapper.find({ increase: true });
    const resetButton = counterWrapper.find({ reset: true });
    const randomNumber = Math.floor((Math.random() * 10) + 1);

    expect(counter.text()).toBe('0');

    for (let i = 0; i < randomNumber; i++) {
      increaseButton.simulate('click');
    }

    resetButton.simulate('click');
    counter = counterWrapper.find('.counter');
    expect(parseInt(counter.text())).toBe(0);
  });

  it('should user change counter', () => {
    const counterWrapper = mount(<Counter/>);
    let counter = counterWrapper.find('.counter');
    const increaseButton = counterWrapper.find({ increase: true });
    const changeButton = counterWrapper.find({ change: true });
    const userInput = counterWrapper.find('#user-value');
    const randomNumber = Math.floor((Math.random() * 10) + 1);

    expect(counter.text()).toBe('0');

    userInput.simulate('change', { target: {value: randomNumber}});
    changeButton.simulate('click');
    counter = counterWrapper.find('.counter');
    expect(parseInt(counter.text())).toBe(randomNumber);

    increaseButton.simulate('click');
    counter = counterWrapper.find('.counter');
    expect(parseInt(counter.text())).toBe(randomNumber + 1);
  });
})