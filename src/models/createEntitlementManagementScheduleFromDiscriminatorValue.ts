import { deserializeIntoEntitlementManagementSchedule } from './deserializeIntoEntitlementManagementSchedule';
import { type EntitlementManagementSchedule } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEntitlementManagementScheduleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEntitlementManagementSchedule;
}
