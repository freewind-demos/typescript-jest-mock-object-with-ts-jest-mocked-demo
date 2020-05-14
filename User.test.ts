import {mocked} from 'ts-jest/utils'
import User from './User';

jest.mock('./User');

describe('User', () => {

  const userMock = mocked(new User('dummy'));

  beforeEach(() => userMock.hello.mockClear());

  it('hello', () => {
    userMock.hello.mockReturnValue('hello-from-test');
    expect(userMock.hello()).toBe('hello-from-test');
  })
})
