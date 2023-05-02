import {deserializeIntoMeetingParticipants} from './deserializeIntoMeetingParticipants';
import {MeetingParticipants} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingParticipantsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMeetingParticipants;
}
