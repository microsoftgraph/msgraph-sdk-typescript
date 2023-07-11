import {EventMessageDetail} from './eventMessageDetail';
import {IdentitySet} from './identitySet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CallTranscriptEventMessageDetail extends EventMessageDetail, Parsable {
    /**
     * Unique identifier of the call.
     */
    callId?: string | undefined;
    /**
     * Unique identifier for a call transcript.
     */
    callTranscriptICalUid?: string | undefined;
    /**
     * The organizer of the meeting.
     */
    meetingOrganizer?: IdentitySet | undefined;
}
