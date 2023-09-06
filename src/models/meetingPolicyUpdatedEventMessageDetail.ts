import { type EventMessageDetail } from './eventMessageDetail';
import { type IdentitySet } from './identitySet';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface MeetingPolicyUpdatedEventMessageDetail extends EventMessageDetail, Parsable {
    /**
     * Initiator of the event.
     */
    initiator?: IdentitySet | undefined;
    /**
     * Represents whether the meeting chat is enabled or not.
     */
    meetingChatEnabled?: boolean | undefined;
    /**
     * Unique identifier of the meeting chat.
     */
    meetingChatId?: string | undefined;
}
