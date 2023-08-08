import type {AttendeeBase} from '../../../models/attendeeBase';
import type {LocationConstraint} from '../../../models/locationConstraint';
import type {TimeConstraint} from '../../../models/timeConstraint';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';
import {Duration} from '@microsoft/kiota-abstractions';

export interface FindMeetingTimesPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The attendees property
     */
    attendees?: AttendeeBase[] | undefined;
    /**
     * The isOrganizerOptional property
     */
    isOrganizerOptional?: boolean | undefined;
    /**
     * The locationConstraint property
     */
    locationConstraint?: LocationConstraint | undefined;
    /**
     * The maxCandidates property
     */
    maxCandidates?: number | undefined;
    /**
     * The meetingDuration property
     */
    meetingDuration?: Duration | undefined;
    /**
     * The minimumAttendeePercentage property
     */
    minimumAttendeePercentage?: number | undefined;
    /**
     * The returnSuggestionReasons property
     */
    returnSuggestionReasons?: boolean | undefined;
    /**
     * The timeConstraint property
     */
    timeConstraint?: TimeConstraint | undefined;
}
