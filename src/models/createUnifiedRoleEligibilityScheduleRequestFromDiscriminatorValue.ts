import {UnifiedRoleEligibilityScheduleRequestImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleEligibilityScheduleRequestImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleEligibilityScheduleRequestImpl();
}
