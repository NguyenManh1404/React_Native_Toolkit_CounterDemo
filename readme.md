## Demo Redux với counter number

1. **yarn add @reduxjs/toolkit** or **npm i @reduxjs/toolkit**: Cài đặt thư viện
2. **yarn add react-redux** or **npm i react-redux**: Cài đặt thư viện

3. Tạo thư mục **redux**, và file **store.js** trong thư mục **redux**

```js
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './AppRedux/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

4. Tạo **AppRedux/counterSlice.js**

```js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
```

5. chỉnh sửa **index.js**

```js
/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import store from './src/redux/store';
import {Provider} from 'react-redux';

const ReduxProvider = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReduxProvider);
```
