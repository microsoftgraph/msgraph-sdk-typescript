import {TeamworkUserIdentity} from './teamworkUserIdentity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkOnlineMeetingInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The identifier of the calendar event associated with the meeting.
     */
    calendarEventId?: string | undefined;
    /**
     * The URL that users click to join or uniquely identify the meeting.
     */
    joinWebUrl?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The organizer of the meeting.
     */
    organizer?: TeamworkUserIdentity | undefined;
}
