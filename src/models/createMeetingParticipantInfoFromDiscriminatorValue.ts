import { deserializeIntoMeetingParticipantInfo } from './deserializeIntoMeetingParticipantInfo';
import { type MeetingParticipantInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMeetingParticipantInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMeetingParticipantInfo;
}
