import {CallRecordingStatus} from './callRecordingStatus';
import type {EventMessageDetail} from './eventMessageDetail';
import type {IdentitySet} from './identitySet';
import {Duration} from '@microsoft/kiota-abstractions';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface CallRecordingEventMessageDetail extends EventMessageDetail, Parsable {
    /**
     * Unique identifier of the call.
     */
    callId?: string | undefined;
    /**
     * Display name for the call recording.
     */
    callRecordingDisplayName?: string | undefined;
    /**
     * Duration of the call recording.
     */
    callRecordingDuration?: Duration | undefined;
    /**
     * Status of the call recording. Possible values are: success, failure, initial, chunkFinished, unknownFutureValue.
     */
    callRecordingStatus?: CallRecordingStatus | undefined;
    /**
     * Call recording URL.
     */
    callRecordingUrl?: string | undefined;
    /**
     * Initiator of the event.
     */
    initiator?: IdentitySet | undefined;
    /**
     * Organizer of the meeting.
     */
    meetingOrganizer?: IdentitySet | undefined;
}
