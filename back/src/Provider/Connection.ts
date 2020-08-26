import mongoose from 'mongoose';
import IConnection from '../Interfaces/IConnection';

class Connection implements IConnection{
  public username: string;
  public password: string;
  public host: string;
  public port: number;
  public database: string;

  constructor(log: IConnection) {
    this.username = log.username;
    this.password = log.password;
    this.host = log.host;
    this.port = log.port;
    this.database = log.database; 
  }

  public async atMongoDB(): Promise<typeof mongoose> {
    try{
      return await mongoose.connect(`mongodb://${this.username}:${this.password}@${this.host}:${this.port}/${this.database}?authSource=admin`,
        { useNewUrlParser: true, useUnifiedTopology: true });
    }catch (e) {
      return e
    }
  }

}

export default Connection;