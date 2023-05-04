import { storeAuth } from './store-auth';
describe('storeAuth', () => {
  it('should work', () => {
    expect(storeAuth()).toEqual('store-auth');
  });
});
