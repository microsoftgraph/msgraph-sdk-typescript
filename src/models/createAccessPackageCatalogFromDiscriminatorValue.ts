import {deserializeIntoAccessPackageCatalog} from './deserializeIntoAccessPackageCatalog';
import {AccessPackageCatalog} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageCatalogFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageCatalog;
}
