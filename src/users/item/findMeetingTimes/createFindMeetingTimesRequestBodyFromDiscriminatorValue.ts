import {FindMeetingTimesRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFindMeetingTimesRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : FindMeetingTimesRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FindMeetingTimesRequestBodyImpl();
}
