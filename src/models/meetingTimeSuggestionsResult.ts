import {MeetingTimeSuggestion} from './meetingTimeSuggestion';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MeetingTimeSuggestionsResult extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A reason for not returning any meeting suggestions. Possible values are: attendeesUnavailable, attendeesUnavailableOrUnknown, locationsUnavailable, organizerUnavailable, or unknown. This property is an empty string if the meetingTimeSuggestions property does include any meeting suggestions. */
    emptySuggestionsReason?: string | undefined;
    /** An array of meeting suggestions. */
    meetingTimeSuggestions?: MeetingTimeSuggestion[] | undefined;
}
