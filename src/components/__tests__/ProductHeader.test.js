import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ProductHeader from '../ProductHeader';

describe('ProductHeader Component', () => {
  it('has an h2 tag', () => {
    //test here

    const component = ReactTestUtils.renderIntoDocument(<ProductHeader/>);
    var h2 = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'h2');
  });
  it('is wrapper inside a title class', () => {
    //test here
    const component = ReactTestUtils.renderIntoDocument(<ProductHeader/>);
    var title = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'title')
  })
})
