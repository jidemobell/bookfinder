/*eslint-disable*/
import nock from 'nock';
import Thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { expect } from 'chai';

import * as types from '../src/actions/actionTypes';
import * as actionTypes from '../src/actions/books/bookActions';


const middlewares = [Thunk];
const mockStore = configureStore(middlewares);

describe('test payload response from actions', () => {

  afterEach(() => {
    nock.cleanAll()
  });

  it('getbook: return a books array', () => {
     const state = {};
     const store = mockStore(state);
     const data = 
       [{
         totalItems: 1,
         items: {
           0: {
            id: 1,
            title: 'The Extraordinary Journey of Harry Forth',
            author: 'James Maden',
            publisher: 'AuthorHouse',
            thumbnail: 'http://books.google.com/books/content?id=UukZBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            previewLink: 'http://books.google.com/books/content?id=UukZBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
          }
         }
       }]


     const doc = nock('http://localhost/3000/')
                   .get()
                   .reply(200, data);
     const jsonData = JSON.parse(doc.interceptors[0].body);
     store.dispatch(actionTypes.getBookAction(jsonData[0]));

     const actions = store.getActions();
     const expectedPayload = { type: types.FIND_BOOKS }
     expect(actions[0].type).to.be.equal(expectedPayload.type);
     expect(actions[0].payload['0'].id).to.be.equal(1)
  });

  it('getbook: return a zero payload on no data', () => {
    const state = {};
     const store = mockStore(state);
     const data = 
       [{
         totalItems: 0,
       }]


     const doc = nock('http://localhost/3000/')
                   .get()
                   .reply(200, data);
     const jsonData = JSON.parse(doc.interceptors[0].body);
     store.dispatch(actionTypes.getBookAction(jsonData[0]));

     const actions = store.getActions();
     const expectedPayload = { type: types.FIND_BOOKS }
     expect(actions[0].type).to.be.equal(expectedPayload.type);
     expect(actions[0].payload).to.be.equal(0)
  });
});


