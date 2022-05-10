import {GetTeamsDeviceUsageUserDetailWithPeriodResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetTeamsDeviceUsageUserDetailWithPeriodResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetTeamsDeviceUsageUserDetailWithPeriodResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetTeamsDeviceUsageUserDetailWithPeriodResponseImpl();
}
