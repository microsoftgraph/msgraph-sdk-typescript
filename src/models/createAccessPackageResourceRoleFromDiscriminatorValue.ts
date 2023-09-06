import { deserializeIntoAccessPackageResourceRole } from './deserializeIntoAccessPackageResourceRole';
import { type AccessPackageResourceRole } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageResourceRoleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageResourceRole;
}
