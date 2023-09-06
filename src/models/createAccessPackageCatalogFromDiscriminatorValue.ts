import { deserializeIntoAccessPackageCatalog } from './deserializeIntoAccessPackageCatalog';
import { type AccessPackageCatalog } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageCatalogFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageCatalog;
}
