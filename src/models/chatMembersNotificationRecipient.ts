import {TeamworkNotificationRecipient} from './teamworkNotificationRecipient';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMembersNotificationRecipient extends Parsable, TeamworkNotificationRecipient {
    /** The unique identifier for the chat whose members should receive the notifications. */
    chatId?: string | undefined;
}
