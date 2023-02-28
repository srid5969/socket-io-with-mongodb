import user, { IUser } from "../model/user";
export class UserService {
  constructor() {}
  async register(data: IUser) {
    const Data = new user(data);
    const savedData = await Data.save();
    return savedData;
  }
}
export async function register(data: IUser) {
  const Data = new user(data);
  const savedData = await Data.save();
  return savedData;
}
