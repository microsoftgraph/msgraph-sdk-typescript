import {ResponseType} from './responseType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ResponseStatus extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The response type. Possible values are: none, organizer, tentativelyAccepted, accepted, declined, notResponded.To differentiate between none and notResponded:  none – from organizer's perspective. This value is used when the status of an attendee/participant is reported to the organizer of a meeting.  notResponded – from attendee's perspective. Indicates the attendee has not responded to the meeting request.  Clients can treat notResponded == none.  As an example, if attendee Alex hasn't responded to a meeting request, getting Alex' response status for that event in Alex' calendar returns notResponded. Getting Alex' response from the calendar of any other attendee or the organizer's returns none. Getting the organizer's response for the event in anybody's calendar also returns none.
     */
    response?: ResponseType | undefined;
    /**
     * The date and time when the response was returned. It uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    time?: Date | undefined;
}
