import { deserializeIntoAccessPackageCatalogCollectionResponse } from './deserializeIntoAccessPackageCatalogCollectionResponse';
import { type AccessPackageCatalogCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageCatalogCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageCatalogCollectionResponse;
}
