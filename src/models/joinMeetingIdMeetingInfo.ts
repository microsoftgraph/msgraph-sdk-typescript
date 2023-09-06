import { type MeetingInfo } from './meetingInfo';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface JoinMeetingIdMeetingInfo extends MeetingInfo, Parsable {
    /**
     * The ID used to join the meeting.
     */
    joinMeetingId?: string | undefined;
    /**
     * The passcode used to join the meeting. Optional.
     */
    passcode?: string | undefined;
}
