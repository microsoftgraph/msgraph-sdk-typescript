import {UnifiedRoleAssignmentScheduleRequestImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleAssignmentScheduleRequestImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleAssignmentScheduleRequestImpl();
}
