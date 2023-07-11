import {Identity} from './identity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserIdentity extends Identity, Parsable {
    /**
     * Indicates the client IP address used by user performing the activity (audit log only).
     */
    ipAddress?: string | undefined;
    /**
     * The userPrincipalName attribute of the user.
     */
    userPrincipalName?: string | undefined;
}
