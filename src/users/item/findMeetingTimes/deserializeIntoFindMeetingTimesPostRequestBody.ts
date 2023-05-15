import {AttendeeBase} from '../../../models/attendeeBase';
import {createAttendeeBaseFromDiscriminatorValue} from '../../../models/createAttendeeBaseFromDiscriminatorValue';
import {createLocationConstraintFromDiscriminatorValue} from '../../../models/createLocationConstraintFromDiscriminatorValue';
import {createTimeConstraintFromDiscriminatorValue} from '../../../models/createTimeConstraintFromDiscriminatorValue';
import {LocationConstraint} from '../../../models/locationConstraint';
import {serializeAttendeeBase} from '../../../models/serializeAttendeeBase';
import {serializeLocationConstraint} from '../../../models/serializeLocationConstraint';
import {serializeTimeConstraint} from '../../../models/serializeTimeConstraint';
import {TimeConstraint} from '../../../models/timeConstraint';
import {FindMeetingTimesPostRequestBody} from './findMeetingTimesPostRequestBody';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFindMeetingTimesPostRequestBody(findMeetingTimesPostRequestBody: FindMeetingTimesPostRequestBody | undefined = {} as FindMeetingTimesPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "attendees": n => { findMeetingTimesPostRequestBody.attendees = n.getCollectionOfObjectValues<AttendeeBase>(createAttendeeBaseFromDiscriminatorValue); },
        "isOrganizerOptional": n => { findMeetingTimesPostRequestBody.isOrganizerOptional = n.getBooleanValue(); },
        "locationConstraint": n => { findMeetingTimesPostRequestBody.locationConstraint = n.getObjectValue<LocationConstraint>(createLocationConstraintFromDiscriminatorValue); },
        "maxCandidates": n => { findMeetingTimesPostRequestBody.maxCandidates = n.getNumberValue(); },
        "meetingDuration": n => { findMeetingTimesPostRequestBody.meetingDuration = n.getDurationValue(); },
        "minimumAttendeePercentage": n => { findMeetingTimesPostRequestBody.minimumAttendeePercentage = n.getNumberValue(); },
        "returnSuggestionReasons": n => { findMeetingTimesPostRequestBody.returnSuggestionReasons = n.getBooleanValue(); },
        "timeConstraint": n => { findMeetingTimesPostRequestBody.timeConstraint = n.getObjectValue<TimeConstraint>(createTimeConstraintFromDiscriminatorValue); },
    }
}
