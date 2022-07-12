import {FindMeetingTimesResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFindMeetingTimesResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : FindMeetingTimesResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FindMeetingTimesResponseMember1();
}
