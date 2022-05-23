import {ScheduleChangeRequest} from './scheduleChangeRequest';

export interface OfferShiftRequest extends ScheduleChangeRequest{
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    recipientActionDateTime?:Date | undefined;
    /** Custom message sent by recipient of the offer shift request. */
    recipientActionMessage?:string | undefined;
    /** User id of the recipient of the offer shift request. */
    recipientUserId?:string | undefined;
    /** User id of the sender of the offer shift request. */
    senderShiftId?:string | undefined;
}
