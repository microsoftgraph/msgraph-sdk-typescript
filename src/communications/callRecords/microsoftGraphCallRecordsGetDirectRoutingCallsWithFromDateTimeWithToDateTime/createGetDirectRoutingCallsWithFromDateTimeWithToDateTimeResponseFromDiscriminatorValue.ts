import { deserializeIntoGetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse } from './deserializeIntoGetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse';
import { type GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse;
}
