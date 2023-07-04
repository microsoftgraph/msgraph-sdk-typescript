import {TeamworkNotificationRecipient} from './teamworkNotificationRecipient';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AadUserNotificationRecipient extends Parsable, TeamworkNotificationRecipient {
    /**
     * Azure AD user identifier. Use the List users method to get this ID.
     */
    userId?: string | undefined;
}
