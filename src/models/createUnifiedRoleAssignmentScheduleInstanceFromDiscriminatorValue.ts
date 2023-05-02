import {deserializeIntoUnifiedRoleAssignmentScheduleInstance} from './deserializeIntoUnifiedRoleAssignmentScheduleInstance';
import {UnifiedRoleAssignmentScheduleInstance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleAssignmentScheduleInstance;
}
