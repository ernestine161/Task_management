import { Strategy } from 'passport-jwt';
import { Model } from 'mongoose';
import { JwtPayload } from './jwt-payload.interface';
import { User } from './user.schema';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private userModel;
    constructor(userModel: Model<User>);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
