import {deserializeIntoMeetingPolicyUpdatedEventMessageDetail} from './deserializeIntoMeetingPolicyUpdatedEventMessageDetail';
import {MeetingPolicyUpdatedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingPolicyUpdatedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMeetingPolicyUpdatedEventMessageDetail;
}
