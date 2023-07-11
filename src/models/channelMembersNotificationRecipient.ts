import {TeamworkNotificationRecipient} from './teamworkNotificationRecipient';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChannelMembersNotificationRecipient extends Parsable, TeamworkNotificationRecipient {
    /**
     * The unique identifier for the channel whose members should receive the notification.
     */
    channelId?: string | undefined;
    /**
     * The unique identifier for the team under which the channel resides.
     */
    teamId?: string | undefined;
}
