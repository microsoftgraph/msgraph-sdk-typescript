import {MeetingParticipantInfo} from './meetingParticipantInfo';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingParticipantInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : MeetingParticipantInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MeetingParticipantInfo();
}
