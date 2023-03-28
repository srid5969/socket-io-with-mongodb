import {container} from 'tsyringe'
import { UserRepository } from 'myapp/user/repository/userRepository';
import { IUserRepository } from 'myapp/user/repository/IUserRepository';

container.register<IUserRepository>(UserRepository, {useClass: UserRepository});
export {container}