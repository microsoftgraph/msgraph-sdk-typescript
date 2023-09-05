import { type AccessPackageResourceRoleScope } from './accessPackageResourceRoleScope';
import { type AccessPackageResourceRoleScopeCollectionResponse } from './accessPackageResourceRoleScopeCollectionResponse';
import { createAccessPackageResourceRoleScopeFromDiscriminatorValue } from './createAccessPackageResourceRoleScopeFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeAccessPackageResourceRoleScope } from './serializeAccessPackageResourceRoleScope';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageResourceRoleScopeCollectionResponse(accessPackageResourceRoleScopeCollectionResponse: AccessPackageResourceRoleScopeCollectionResponse | undefined = {} as AccessPackageResourceRoleScopeCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessPackageResourceRoleScopeCollectionResponse),
        "value": n => { accessPackageResourceRoleScopeCollectionResponse.value = n.getCollectionOfObjectValues<AccessPackageResourceRoleScope>(createAccessPackageResourceRoleScopeFromDiscriminatorValue); },
    }
}
