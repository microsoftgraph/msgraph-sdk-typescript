import {UnifiedRoleAssignmentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleAssignmentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleAssignmentImpl();
}
