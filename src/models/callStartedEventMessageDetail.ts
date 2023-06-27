import {EventMessageDetail} from './eventMessageDetail';
import {IdentitySet} from './identitySet';
import {TeamworkCallEventType} from './teamworkCallEventType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CallStartedEventMessageDetail extends EventMessageDetail, Parsable {
    /**
     * Represents the call event type. Possible values are: call, meeting, screenShare, unknownFutureValue.
     */
    callEventType?: TeamworkCallEventType | undefined;
    /**
     * Unique identifier of the call.
     */
    callId?: string | undefined;
    /**
     * Initiator of the event.
     */
    initiator?: IdentitySet | undefined;
}
