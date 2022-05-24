import {AttendeeType} from './attendeeType';
import {Recipient} from './recipient';

export interface AttendeeBase extends Recipient{
    /** The type of attendee. Possible values are: required, optional, resource. Currently if the attendee is a person, findMeetingTimes always considers the person is of the Required type. */
    type?:AttendeeType | undefined;
}
