import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

const middleware = [thunk];

export default applyMiddleware(...middleware);
