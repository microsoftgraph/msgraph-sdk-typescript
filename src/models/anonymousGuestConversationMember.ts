import {ConversationMember} from './conversationMember';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AnonymousGuestConversationMember extends ConversationMember, Parsable {
    /**
     * Unique ID that represents the user. Note: This ID can change if the user leaves and rejoins the meeting, or joins from a different device.
     */
    anonymousGuestId?: string | undefined;
}
