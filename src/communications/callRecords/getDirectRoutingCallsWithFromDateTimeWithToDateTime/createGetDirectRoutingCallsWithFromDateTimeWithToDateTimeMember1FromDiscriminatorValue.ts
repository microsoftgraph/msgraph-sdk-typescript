import {GetDirectRoutingCallsWithFromDateTimeWithToDateTimeMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetDirectRoutingCallsWithFromDateTimeWithToDateTimeMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : GetDirectRoutingCallsWithFromDateTimeWithToDateTimeMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetDirectRoutingCallsWithFromDateTimeWithToDateTimeMember1();
}
