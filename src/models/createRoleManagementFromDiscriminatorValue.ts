import { deserializeIntoRoleManagement } from './deserializeIntoRoleManagement';
import { type RoleManagement } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRoleManagementFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRoleManagement;
}
