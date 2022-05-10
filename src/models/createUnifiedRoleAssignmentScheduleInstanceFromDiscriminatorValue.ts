import {UnifiedRoleAssignmentScheduleInstanceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleAssignmentScheduleInstanceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleAssignmentScheduleInstanceImpl();
}
