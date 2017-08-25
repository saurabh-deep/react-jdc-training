import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from "enzyme";
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
const store = configureStore();

it('renders without crashing', () => {
  // Jest uses jsdom as default environment. document and window are globally available
  const div = document.createElement('div');
  window.localStorage = {};
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});

it('renders without crashing => enzyme mount', () => {
  mount(<App />);
});