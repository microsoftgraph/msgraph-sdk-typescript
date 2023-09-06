import { type AccessPackageCatalog } from './accessPackageCatalog';
import { type AccessPackageCatalogCollectionResponse } from './accessPackageCatalogCollectionResponse';
import { createAccessPackageCatalogFromDiscriminatorValue } from './createAccessPackageCatalogFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeAccessPackageCatalog } from './serializeAccessPackageCatalog';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageCatalogCollectionResponse(accessPackageCatalogCollectionResponse: AccessPackageCatalogCollectionResponse | undefined = {} as AccessPackageCatalogCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessPackageCatalogCollectionResponse),
        "value": n => { accessPackageCatalogCollectionResponse.value = n.getCollectionOfObjectValues<AccessPackageCatalog>(createAccessPackageCatalogFromDiscriminatorValue); },
    }
}
