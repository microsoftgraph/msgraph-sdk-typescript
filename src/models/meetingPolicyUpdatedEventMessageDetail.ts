import {EventMessageDetail} from './eventMessageDetail';
import {IdentitySet} from './identitySet';
import {Parsable} from '@microsoft/kiota-abstractions';

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
