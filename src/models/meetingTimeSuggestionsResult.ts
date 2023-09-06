import { type MeetingTimeSuggestion } from './meetingTimeSuggestion';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface MeetingTimeSuggestionsResult extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * A reason for not returning any meeting suggestions. The possible values are: attendeesUnavailable, attendeesUnavailableOrUnknown, locationsUnavailable, organizerUnavailable, or unknown. This property is an empty string if the meetingTimeSuggestions property does include any meeting suggestions.
     */
    emptySuggestionsReason?: string | undefined;
    /**
     * An array of meeting suggestions.
     */
    meetingTimeSuggestions?: MeetingTimeSuggestion[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
