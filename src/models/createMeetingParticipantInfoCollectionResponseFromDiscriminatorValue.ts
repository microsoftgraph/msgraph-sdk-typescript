import {MeetingParticipantInfoCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingParticipantInfoCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MeetingParticipantInfoCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MeetingParticipantInfoCollectionResponse();
}
