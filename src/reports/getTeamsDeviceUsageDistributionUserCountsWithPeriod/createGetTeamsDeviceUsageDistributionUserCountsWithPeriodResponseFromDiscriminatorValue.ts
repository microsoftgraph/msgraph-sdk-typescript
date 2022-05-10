import {GetTeamsDeviceUsageDistributionUserCountsWithPeriodResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetTeamsDeviceUsageDistributionUserCountsWithPeriodResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetTeamsDeviceUsageDistributionUserCountsWithPeriodResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetTeamsDeviceUsageDistributionUserCountsWithPeriodResponseImpl();
}
