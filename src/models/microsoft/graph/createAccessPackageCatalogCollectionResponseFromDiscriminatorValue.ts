import {AccessPackageCatalogCollectionResponse} from './accessPackageCatalogCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageCatalogCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageCatalogCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageCatalogCollectionResponse();
}
