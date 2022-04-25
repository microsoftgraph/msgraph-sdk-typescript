import {UnifiedRoleEligibilityScheduleInstance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleEligibilityScheduleInstance {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleEligibilityScheduleInstance();
}
