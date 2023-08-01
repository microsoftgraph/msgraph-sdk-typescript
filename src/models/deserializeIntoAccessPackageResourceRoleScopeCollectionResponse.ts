import type {AccessPackageResourceRoleScope} from './accessPackageResourceRoleScope';
import type {AccessPackageResourceRoleScopeCollectionResponse} from './accessPackageResourceRoleScopeCollectionResponse';
import {createAccessPackageResourceRoleScopeFromDiscriminatorValue} from './createAccessPackageResourceRoleScopeFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAccessPackageResourceRoleScope} from './serializeAccessPackageResourceRoleScope';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageResourceRoleScopeCollectionResponse(accessPackageResourceRoleScopeCollectionResponse: AccessPackageResourceRoleScopeCollectionResponse | undefined = {} as AccessPackageResourceRoleScopeCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessPackageResourceRoleScopeCollectionResponse),
        "value": n => { accessPackageResourceRoleScopeCollectionResponse.value = n.getCollectionOfObjectValues<AccessPackageResourceRoleScope>(createAccessPackageResourceRoleScopeFromDiscriminatorValue); },
    }
}
