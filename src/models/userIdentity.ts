import {Identity} from './identity';

export interface UserIdentity extends Identity{
    /** Indicates the client IP address used by user performing the activity (audit log only). */
    ipAddress?:string | undefined;
    /** The userPrincipalName attribute of the user. */
    userPrincipalName?:string | undefined;
}
