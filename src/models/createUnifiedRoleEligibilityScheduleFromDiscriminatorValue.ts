import { deserializeIntoUnifiedRoleEligibilitySchedule } from './deserializeIntoUnifiedRoleEligibilitySchedule';
import { type UnifiedRoleEligibilitySchedule } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRoleEligibilityScheduleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleEligibilitySchedule;
}
