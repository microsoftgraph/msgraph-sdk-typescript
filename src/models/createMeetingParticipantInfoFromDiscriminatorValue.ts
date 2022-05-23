import {MeetingParticipantInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingParticipantInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : MeetingParticipantInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MeetingParticipantInfoImpl();
}
