import {CallParticipantInfo} from './callParticipantInfo';
import {EventMessageDetail} from './eventMessageDetail';
import {IdentitySet} from './identitySet';
import {TeamworkCallEventType} from './teamworkCallEventType';
import {Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface CallEndedEventMessageDetail extends EventMessageDetail, Parsable {
    /**
     * Duration of the call.
     */
    callDuration?: Duration | undefined;
    /**
     * Represents the call event type. Possible values are: call, meeting, screenShare, unknownFutureValue.
     */
    callEventType?: TeamworkCallEventType | undefined;
    /**
     * Unique identifier of the call.
     */
    callId?: string | undefined;
    /**
     * List of call participants.
     */
    callParticipants?: CallParticipantInfo[] | undefined;
    /**
     * Initiator of the event.
     */
    initiator?: IdentitySet | undefined;
}
