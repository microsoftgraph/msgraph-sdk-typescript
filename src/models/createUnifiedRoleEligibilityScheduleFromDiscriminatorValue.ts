import {UnifiedRoleEligibilityScheduleImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleEligibilityScheduleFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleEligibilityScheduleImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleEligibilityScheduleImpl();
}
