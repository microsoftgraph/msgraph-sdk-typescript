import {DateTimeTimeZone} from './dateTimeTimeZone';
import {EventMessage} from './eventMessage';
import {Location} from './location';
import {MeetingRequestType} from './meetingRequestType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EventMessageRequest extends Partial<AdditionalDataHolder>, EventMessage, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** True if the meeting organizer allows invitees to propose a new time when responding, false otherwise. Optional. Default is true. */
    allowNewTimeProposals?: boolean | undefined;
    /** The meetingRequestType property */
    meetingRequestType?: MeetingRequestType | undefined;
    /** If the meeting update changes the meeting end time, this property specifies the previous meeting end time. */
    previousEndDateTime?: DateTimeTimeZone | undefined;
    /** If the meeting update changes the meeting location, this property specifies the previous meeting location. */
    previousLocation?: Location | undefined;
    /** If the meeting update changes the meeting start time, this property specifies the previous meeting start time. */
    previousStartDateTime?: DateTimeTimeZone | undefined;
    /** Set to true if the sender would like the invitee to send a response to the requested meeting. */
    responseRequested?: boolean | undefined;
}
