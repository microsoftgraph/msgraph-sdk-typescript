import {GetTeamsDeviceUsageUserDetailWithDateResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetTeamsDeviceUsageUserDetailWithDateResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetTeamsDeviceUsageUserDetailWithDateResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetTeamsDeviceUsageUserDetailWithDateResponseImpl();
}
