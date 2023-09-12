import { type AttendeeBase } from '../../../models/attendeeBase';
import { type LocationConstraint } from '../../../models/locationConstraint';
import { serializeAttendeeBase } from '../../../models/serializeAttendeeBase';
import { serializeLocationConstraint } from '../../../models/serializeLocationConstraint';
import { serializeTimeConstraint } from '../../../models/serializeTimeConstraint';
import { type TimeConstraint } from '../../../models/timeConstraint';
import { type FindMeetingTimesPostRequestBody } from './findMeetingTimesPostRequestBody';
import { Duration, type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFindMeetingTimesPostRequestBody(writer: SerializationWriter, findMeetingTimesPostRequestBody: FindMeetingTimesPostRequestBody | undefined = {} as FindMeetingTimesPostRequestBody) : void {
        writer.writeCollectionOfObjectValues<AttendeeBase>("attendees", findMeetingTimesPostRequestBody.attendees, serializeAttendeeBase);
        writer.writeBooleanValue("isOrganizerOptional", findMeetingTimesPostRequestBody.isOrganizerOptional);
        writer.writeObjectValue<LocationConstraint>("locationConstraint", findMeetingTimesPostRequestBody.locationConstraint, serializeLocationConstraint);
        writer.writeNumberValue("maxCandidates", findMeetingTimesPostRequestBody.maxCandidates);
        writer.writeDurationValue("meetingDuration", findMeetingTimesPostRequestBody.meetingDuration);
        writer.writeNumberValue("minimumAttendeePercentage", findMeetingTimesPostRequestBody.minimumAttendeePercentage);
        writer.writeBooleanValue("returnSuggestionReasons", findMeetingTimesPostRequestBody.returnSuggestionReasons);
        writer.writeObjectValue<TimeConstraint>("timeConstraint", findMeetingTimesPostRequestBody.timeConstraint, serializeTimeConstraint);
        writer.writeAdditionalData(findMeetingTimesPostRequestBody.additionalData);
}
