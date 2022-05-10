import {GetTeamsDeviceUsageUserCountsWithPeriodResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetTeamsDeviceUsageUserCountsWithPeriodResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetTeamsDeviceUsageUserCountsWithPeriodResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetTeamsDeviceUsageUserCountsWithPeriodResponseImpl();
}
