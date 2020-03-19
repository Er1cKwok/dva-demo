import * as api from '../services/api';

export default {
  namespace: 'home',
  state: {
    name: 'Eric',
    data: []
  },
  reducers: {
    print(state, action) {
      const _state = JSON.parse(JSON.stringify(state));

      return _state;
    },
    setData(state, action) {
      const _state = JSON.parse(JSON.stringify(state));

      _state.data = action.data;
      console.log(_state)
      return _state;
    }
  },
  effects: {
    *getData({payload}, {put, call}) {
      const result = yield call(api.test);

      yield put({
        type: 'setData',
        data: result
      });
    }
  },
  subscriptions: {
    setup({dispatch, history}) {
      history.listen(({pathname}) => {
        if (pathname === '/users') {
          console.log('users');
        }
      });
    }
  }
}