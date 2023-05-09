import {deserializeIntoGetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse} from './deserializeIntoGetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse';
import {GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse;
}
