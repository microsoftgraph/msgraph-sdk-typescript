import {CallParticipantInfo} from './callParticipantInfo';
import {EventMessageDetail} from './eventMessageDetail';
import {IdentitySet} from './identitySet';
import {TeamworkCallEventType} from './teamworkCallEventType';
import {AdditionalDataHolder, Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface CallEndedEventMessageDetail extends Partial<AdditionalDataHolder>, EventMessageDetail, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Duration of the call. */
    callDuration?: Duration | undefined;
    /** Represents the call event type. Possible values are: call, meeting, screenShare, unknownFutureValue. */
    callEventType?: TeamworkCallEventType | undefined;
    /** Unique identifier of the call. */
    callId?: string | undefined;
    /** List of call participants. */
    callParticipants?: CallParticipantInfo[] | undefined;
    /** Initiator of the event. */
    initiator?: IdentitySet | undefined;
}
