import {UnifiedRoleAssignmentScheduleInstance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleAssignmentScheduleInstance {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleAssignmentScheduleInstance();
}
