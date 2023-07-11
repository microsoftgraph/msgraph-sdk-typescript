import {AccessPackageResourceScope} from './accessPackageResourceScope';
import {AccessPackageResourceScopeCollectionResponse} from './accessPackageResourceScopeCollectionResponse';
import {createAccessPackageResourceScopeFromDiscriminatorValue} from './createAccessPackageResourceScopeFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAccessPackageResourceScope} from './serializeAccessPackageResourceScope';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageResourceScopeCollectionResponse(accessPackageResourceScopeCollectionResponse: AccessPackageResourceScopeCollectionResponse | undefined = {} as AccessPackageResourceScopeCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessPackageResourceScopeCollectionResponse),
        "value": n => { accessPackageResourceScopeCollectionResponse.value = n.getCollectionOfObjectValues<AccessPackageResourceScope>(createAccessPackageResourceScopeFromDiscriminatorValue); },
    }
}
