import {UnifiedRoleAssignmentScheduleImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleAssignmentScheduleFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleAssignmentScheduleImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleAssignmentScheduleImpl();
}
