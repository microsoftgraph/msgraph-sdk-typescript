import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface GroupLifecyclePolicy extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** List of email address to send notifications for groups without owners. Multiple email address can be defined by separating email address with a semicolon. */
    alternateNotificationEmails?: string | undefined;
    /** Number of days before a group expires and needs to be renewed. Once renewed, the group expiration is extended by the number of days defined. */
    groupLifetimeInDays?: number | undefined;
    /** The group type for which the expiration policy applies. Possible values are All, Selected or None. */
    managedGroupTypes?: string | undefined;
}
