import {UnifiedRoleAssignmentScheduleInstanceCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleAssignmentScheduleInstanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleAssignmentScheduleInstanceCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleAssignmentScheduleInstanceCollectionResponseImpl();
}
