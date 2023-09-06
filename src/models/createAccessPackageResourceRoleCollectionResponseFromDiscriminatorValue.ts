import { deserializeIntoAccessPackageResourceRoleCollectionResponse } from './deserializeIntoAccessPackageResourceRoleCollectionResponse';
import { type AccessPackageResourceRoleCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageResourceRoleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageResourceRoleCollectionResponse;
}
