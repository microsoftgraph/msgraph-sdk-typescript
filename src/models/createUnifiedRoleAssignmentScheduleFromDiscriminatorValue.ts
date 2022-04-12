import {UnifiedRoleAssignmentSchedule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleAssignmentScheduleFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleAssignmentSchedule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleAssignmentSchedule();
}
