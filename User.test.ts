import {mocked} from 'ts-jest/utils'
import User from './User';

jest.mock('./User');

type InterfaceOf<T> = Pick<T, keyof T>;

function testUser1(user: User): void {

}

function testUser2(user: InterfaceOf<User>): void {

}


describe('User', () => {

  const userMock = mocked(new User('dummy'));

  beforeEach(() => userMock.hello.mockClear());

  it('hello', () => {
    userMock.hello.mockReturnValue('hello-from-test');
    expect(userMock.hello()).toBe('hello-from-test');

    testUser1(userMock);
    testUser2(userMock);
  });

})
