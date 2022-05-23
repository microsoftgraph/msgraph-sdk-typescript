import {AccessPackageCatalogCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageCatalogCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageCatalogCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageCatalogCollectionResponseImpl();
}
