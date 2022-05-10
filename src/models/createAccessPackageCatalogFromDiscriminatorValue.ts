import {AccessPackageCatalogImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageCatalogFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageCatalogImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageCatalogImpl();
}
