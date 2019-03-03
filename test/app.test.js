
/*eslint-disable*/
import React from 'react';
import configureStore from 'redux-mock-store';
import Thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import * as types from '../src/actions/actionTypes';
import booksReducer from '../src/reducers/books/booksReducers';
import App from '../src/components/App/App';




Enzyme.configure({ adapter: new Adapter() });


const middlewares = [Thunk]; 
const mockStore = configureStore(booksReducer, middlewares);



describe('<App />', () => {
  it('should get a class of rendered component', () => {
    const initialState = { }; 
    const store = mockStore(initialState);

    const props = {
			actions: {
				getBookAction: () => {
          return {
            type: types.FIND_BOOKS,
            payload: [{}]
          }
        }
			}
		};

    
    const app = shallow(
      <Provider store={store} >
       <App  {...props} />
     </Provider>,
    );

    expect(app.hasClass('main'));
  })
});