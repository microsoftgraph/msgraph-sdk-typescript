import {MeetingParticipantsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingParticipantsFromDiscriminatorValue(parseNode: ParseNode | undefined) : MeetingParticipantsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MeetingParticipantsImpl();
}
