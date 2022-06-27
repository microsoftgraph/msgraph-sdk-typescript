import {MeetingPolicyUpdatedEventMessageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingPolicyUpdatedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : MeetingPolicyUpdatedEventMessageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MeetingPolicyUpdatedEventMessageDetailImpl();
}
