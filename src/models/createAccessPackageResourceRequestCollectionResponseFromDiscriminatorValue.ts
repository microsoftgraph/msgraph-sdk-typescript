import { deserializeIntoAccessPackageResourceRequestCollectionResponse } from './deserializeIntoAccessPackageResourceRequestCollectionResponse';
import { type AccessPackageResourceRequestCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageResourceRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageResourceRequestCollectionResponse;
}
