import {EntitlementManagementSchedule} from './entitlementManagementSchedule';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEntitlementManagementScheduleFromDiscriminatorValue(parseNode: ParseNode | undefined) : EntitlementManagementSchedule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EntitlementManagementSchedule();
}
