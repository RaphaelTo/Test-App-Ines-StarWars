import Connection from '../../Provider/Connection';
import IConnection from '../../Interfaces/IConnection';

import mongoose from 'mongoose';
import { mocked } from 'ts-jest/utils'

jest.mock('mongoose');
const mockedMongoose = mocked(mongoose, true);

describe('test class Connection', () => {
  test('instanciation work', () => {
    const objectToGiveAtConnection: IConnection = {
      username: "string",
      password: "string",
      host: "string",
      port: 1,
      database: "string"
    };

    const con: Connection = new Connection(objectToGiveAtConnection);
    
    expect(con).not.toBeNull();
  });

  test('method atMongoDB return an object mongoose', async () => {
    const objectToGiveAtConnection: IConnection = {
      username: "string",
      password: "string",
      host: "string",
      port: 1,
      database: "string"
    };
    const instanceConnection: Connection = new Connection(objectToGiveAtConnection);
    // @ts-ignore
    mockedMongoose.connect.mockResolvedValue({});

    expect.assertions(2);
    const mongo = await instanceConnection.atMongoDB();

    expect(mockedMongoose.connect).toHaveBeenCalledTimes(1);
    expect(mongo).toEqual({});
  })

  test('method atMongoDB throw error if connection doesnt work', async () => {
    const objectToGiveAtConnection: IConnection = {
      username: "string",
      password: "string",
      host: "string",
      port: 1,
      database: "string"
    };
    const instanceConnection: Connection = new Connection(objectToGiveAtConnection);

    // @ts-ignore
    mockedMongoose.connect.mockRejectedValue(new Error('ECONNREFUSED'));

    try{
      await instanceConnection.atMongoDB();
    }catch (e) {
      expect(mockedMongoose.connect).toHaveBeenCalledTimes(1);
      expect(e).toBe(/ECONNREFUSED/);
    }
  })
})