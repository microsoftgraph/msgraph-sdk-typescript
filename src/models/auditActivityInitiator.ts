import {AppIdentity} from './appIdentity';
import {UserIdentity} from './userIdentity';

export interface AuditActivityInitiator{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** If the actor initiating the activity is an app, this property indicates all its identification information including appId, displayName, servicePrincipalId, and servicePrincipalName. */
    app?:AppIdentity | undefined;
    /** If the actor initiating the activity is a user, this property indicates their identification information including their id, displayName, and userPrincipalName. */
    user?:UserIdentity | undefined;
}
