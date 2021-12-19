import {mocked} from 'ts-jest/utils'
import {user} from './user';

jest.mock('./user');

describe('User', () => {

  const userMock = mocked(user);

  beforeEach(() => jest.clearAllMocks());

  it('data fields are not changed', () => {
    expect(userMock.name).toBe('testing-user')
  });

  it('methods are mocked to empty mocking functions', () => {
    expect(userMock.hello()).toBe(undefined);

    userMock.hello.mockReturnValue('new-hello');
    expect(userMock.hello()).toBe('new-hello');
  })

})
