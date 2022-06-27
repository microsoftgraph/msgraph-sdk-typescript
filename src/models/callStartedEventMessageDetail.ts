import {EventMessageDetail} from './eventMessageDetail';
import {IdentitySet} from './identitySet';
import {TeamworkCallEventType} from './teamworkCallEventType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CallStartedEventMessageDetail extends Partial<AdditionalDataHolder>, EventMessageDetail, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Represents the call event type. Possible values are: call, meeting, screenShare, unknownFutureValue. */
    callEventType?: TeamworkCallEventType | undefined;
    /** Unique identifier of the call. */
    callId?: string | undefined;
    /** Initiator of the event. */
    initiator?: IdentitySet | undefined;
}
