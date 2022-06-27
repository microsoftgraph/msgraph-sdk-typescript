import {AttendeeType} from './attendeeType';
import {Recipient} from './recipient';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AttendeeBase extends Partial<AdditionalDataHolder>, Partial<Parsable>, Recipient {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The type of attendee. Possible values are: required, optional, resource. Currently if the attendee is a person, findMeetingTimes always considers the person is of the Required type. */
    type?: AttendeeType | undefined;
}
