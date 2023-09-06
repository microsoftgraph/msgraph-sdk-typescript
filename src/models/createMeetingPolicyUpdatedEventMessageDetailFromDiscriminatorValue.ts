import { deserializeIntoMeetingPolicyUpdatedEventMessageDetail } from './deserializeIntoMeetingPolicyUpdatedEventMessageDetail';
import { type MeetingPolicyUpdatedEventMessageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMeetingPolicyUpdatedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMeetingPolicyUpdatedEventMessageDetail;
}
