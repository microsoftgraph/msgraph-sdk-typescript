import {MeetingPolicyUpdatedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingPolicyUpdatedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : MeetingPolicyUpdatedEventMessageDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MeetingPolicyUpdatedEventMessageDetail();
}
