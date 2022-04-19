import {UnifiedRoleEligibilitySchedule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleEligibilityScheduleFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleEligibilitySchedule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleEligibilitySchedule();
}
