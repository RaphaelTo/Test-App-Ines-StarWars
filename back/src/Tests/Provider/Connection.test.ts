import Connection from '../../Provider/Connection';


interface ConnectionStructure {
  username: string,
  password: string,
  host: string,
  port: number,
  database: string
};

describe('test class Connection', () => {
  test('test instanciation work', () => {
    const objectToGiveAtConnection: ConnectionStructure = {
      username: "string",
      password: "string",
      host: "string",
      port: 1,
      database: "string"
    };

    const con: Connection = new Connection(objectToGiveAtConnection);
    
    expect(con).not.toBeNull();
  });


})