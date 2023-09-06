import { deserializeIntoAccessPackageResourceRoleScope } from './deserializeIntoAccessPackageResourceRoleScope';
import { type AccessPackageResourceRoleScope } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageResourceRoleScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageResourceRoleScope;
}
