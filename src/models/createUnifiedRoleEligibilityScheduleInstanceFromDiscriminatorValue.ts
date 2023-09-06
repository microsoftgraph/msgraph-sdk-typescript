import { deserializeIntoUnifiedRoleEligibilityScheduleInstance } from './deserializeIntoUnifiedRoleEligibilityScheduleInstance';
import { type UnifiedRoleEligibilityScheduleInstance } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleEligibilityScheduleInstance;
}
