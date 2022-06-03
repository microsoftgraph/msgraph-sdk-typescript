import {TeamworkUserIdentity} from './teamworkUserIdentity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkOnlineMeetingInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The identifier of the calendar event associated with the meeting. */
    calendarEventId?: string | undefined;
    /** The URL which can be clicked on to join or uniquely identify the meeting. */
    joinWebUrl?: string | undefined;
    /** The organizer of the meeting. */
    organizer?: TeamworkUserIdentity | undefined;
}
