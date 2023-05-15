import {deserializeIntoEntitlementManagementSchedule} from './deserializeIntoEntitlementManagementSchedule';
import {EntitlementManagementSchedule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEntitlementManagementScheduleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEntitlementManagementSchedule;
}
