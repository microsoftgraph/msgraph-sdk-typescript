import {DateTimeTimeZone} from './dateTimeTimeZone';
import {FreeBusyStatus} from './freeBusyStatus';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ScheduleItem extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The date, time, and time zone that the corresponding event ends.
     */
    end?: DateTimeTimeZone | undefined;
    /**
     * The sensitivity of the corresponding event. True if the event is marked private, false otherwise. Optional.
     */
    isPrivate?: boolean | undefined;
    /**
     * The location where the corresponding event is held or attended from. Optional.
     */
    location?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The date, time, and time zone that the corresponding event starts.
     */
    start?: DateTimeTimeZone | undefined;
    /**
     * The availability status of the user or resource during the corresponding event. The possible values are: free, tentative, busy, oof, workingElsewhere, unknown.
     */
    status?: FreeBusyStatus | undefined;
    /**
     * The corresponding event's subject line. Optional.
     */
    subject?: string | undefined;
}
