import {Identity} from './identity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserIdentity extends Partial<AdditionalDataHolder>, Identity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Indicates the client IP address used by user performing the activity (audit log only). */
    ipAddress?: string | undefined;
    /** The userPrincipalName attribute of the user. */
    userPrincipalName?: string | undefined;
}
