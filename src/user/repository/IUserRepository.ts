import { IUser } from "../model/user";
export interface IUserRepository {
  findAll(): Promise<Array<IUser>>;
  save(params: IUser): Promise<IUser>;
}
