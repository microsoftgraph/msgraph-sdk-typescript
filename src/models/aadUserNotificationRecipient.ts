import {TeamworkNotificationRecipient} from './teamworkNotificationRecipient';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AadUserNotificationRecipient extends Partial<AdditionalDataHolder>, Partial<Parsable>, TeamworkNotificationRecipient {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Azure AD user identifier. Use the List users method to get this ID. */
    userId?: string | undefined;
}
