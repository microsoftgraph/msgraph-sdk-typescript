import {EventMessageDetail} from './eventMessageDetail';
import {IdentitySet} from './identitySet';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MeetingPolicyUpdatedEventMessageDetail extends Partial<AdditionalDataHolder>, EventMessageDetail, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Initiator of the event. */
    initiator?: IdentitySet | undefined;
    /** Represents whether the meeting chat is enabled or not. */
    meetingChatEnabled?: boolean | undefined;
    /** Unique identifier of the meeting chat. */
    meetingChatId?: string | undefined;
}
