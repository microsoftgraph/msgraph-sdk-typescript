import {deserializeIntoMeetingParticipantInfo} from './deserializeIntoMeetingParticipantInfo';
import {MeetingParticipantInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingParticipantInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMeetingParticipantInfo;
}
