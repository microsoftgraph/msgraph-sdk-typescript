import { deserializeIntoAccessPackageResourceRoleScopeCollectionResponse } from './deserializeIntoAccessPackageResourceRoleScopeCollectionResponse';
import { type AccessPackageResourceRoleScopeCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageResourceRoleScopeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageResourceRoleScopeCollectionResponse;
}
