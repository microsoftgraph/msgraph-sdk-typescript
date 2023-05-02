import {deserializeIntoUnifiedRoleAssignment} from './deserializeIntoUnifiedRoleAssignment';
import {UnifiedRoleAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleAssignment;
}
