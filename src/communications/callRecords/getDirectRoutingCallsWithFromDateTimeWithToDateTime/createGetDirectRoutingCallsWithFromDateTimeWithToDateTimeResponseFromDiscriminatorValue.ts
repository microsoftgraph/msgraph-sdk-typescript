import {GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponseImpl();
}
