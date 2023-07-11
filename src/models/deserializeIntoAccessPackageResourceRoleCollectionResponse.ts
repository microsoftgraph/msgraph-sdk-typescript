import {AccessPackageResourceRole} from './accessPackageResourceRole';
import {AccessPackageResourceRoleCollectionResponse} from './accessPackageResourceRoleCollectionResponse';
import {createAccessPackageResourceRoleFromDiscriminatorValue} from './createAccessPackageResourceRoleFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAccessPackageResourceRole} from './serializeAccessPackageResourceRole';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageResourceRoleCollectionResponse(accessPackageResourceRoleCollectionResponse: AccessPackageResourceRoleCollectionResponse | undefined = {} as AccessPackageResourceRoleCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessPackageResourceRoleCollectionResponse),
        "value": n => { accessPackageResourceRoleCollectionResponse.value = n.getCollectionOfObjectValues<AccessPackageResourceRole>(createAccessPackageResourceRoleFromDiscriminatorValue); },
    }
}
