import {EntitlementManagementScheduleImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEntitlementManagementScheduleFromDiscriminatorValue(parseNode: ParseNode | undefined) : EntitlementManagementScheduleImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EntitlementManagementScheduleImpl();
}
