import { type TeamworkNotificationRecipient } from './teamworkNotificationRecipient';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface TeamMembersNotificationRecipient extends Parsable, TeamworkNotificationRecipient {
    /**
     * The unique identifier for the team whose members should receive the notification.
     */
    teamId?: string | undefined;
}
