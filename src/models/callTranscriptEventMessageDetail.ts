import {EventMessageDetail} from './eventMessageDetail';
import {IdentitySet} from './identitySet';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CallTranscriptEventMessageDetail extends Partial<AdditionalDataHolder>, EventMessageDetail, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Unique identifier of the call. */
    callId?: string | undefined;
    /** Unique identifier for a call transcript. */
    callTranscriptICalUid?: string | undefined;
    /** The organizer of the meeting. */
    meetingOrganizer?: IdentitySet | undefined;
}
