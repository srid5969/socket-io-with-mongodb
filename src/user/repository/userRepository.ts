import { injectable as Injectable } from "tsyringe";

import User, { IUser } from "../model/user";
import mongoose, {model, Model,Document ,Promise} from "mongoose";

@Injectable()      
// export class UserRepository extends User{
//   constructor(private userModel: Model<IUser>) {}
// }
// let d=new UserRepository()

export class RepositoryBase<T extends Document> {

    private _model: Model<Document>;
   
     constructor(schemaModel: Model<Document>) {
        this._model = schemaModel;
     }
   
    create(item: T): Promise<model<T>> {
       return this._model.create(item);
    }
   }
//    And finally my UserRepository which extends RepositoryBase and implements an IUserRepository (actually empty):
   
   export class UserRepository  extends RepositoryBase<IUser> implements     IUserRepository{
   
     constructor(){
       super(User)
     }}