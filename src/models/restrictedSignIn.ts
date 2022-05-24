import {SignIn} from './signIn';

export interface RestrictedSignIn extends SignIn{
    /** The targetTenantId property */
    targetTenantId?:string | undefined;
}
