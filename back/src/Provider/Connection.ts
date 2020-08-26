interface ConnectionStructure {
  username: string,
  password: string,
  host: string,
  port: number,
  database: string
};

class Connection {
  private _log: ConnectionStructure;

  constructor(log: ConnectionStructure) {
    this._log = log;
  }
}

export default Connection;