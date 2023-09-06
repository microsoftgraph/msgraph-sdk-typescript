import { AttendeeType } from './attendeeType';
import { type Recipient } from './recipient';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AttendeeBase extends Parsable, Recipient {
    /**
     * The type of attendee. The possible values are: required, optional, resource. Currently if the attendee is a person, findMeetingTimes always considers the person is of the Required type.
     */
    type?: AttendeeType | undefined;
}
