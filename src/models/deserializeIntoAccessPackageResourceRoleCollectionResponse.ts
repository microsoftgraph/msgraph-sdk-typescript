import { type AccessPackageResourceRole } from './accessPackageResourceRole';
import { type AccessPackageResourceRoleCollectionResponse } from './accessPackageResourceRoleCollectionResponse';
import { createAccessPackageResourceRoleFromDiscriminatorValue } from './createAccessPackageResourceRoleFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeAccessPackageResourceRole } from './serializeAccessPackageResourceRole';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageResourceRoleCollectionResponse(accessPackageResourceRoleCollectionResponse: AccessPackageResourceRoleCollectionResponse | undefined = {} as AccessPackageResourceRoleCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessPackageResourceRoleCollectionResponse),
        "value": n => { accessPackageResourceRoleCollectionResponse.value = n.getCollectionOfObjectValues<AccessPackageResourceRole>(createAccessPackageResourceRoleFromDiscriminatorValue); },
    }
}
