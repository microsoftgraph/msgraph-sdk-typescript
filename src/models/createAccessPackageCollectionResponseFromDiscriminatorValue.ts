import { deserializeIntoAccessPackageCollectionResponse } from './deserializeIntoAccessPackageCollectionResponse';
import { type AccessPackageCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageCollectionResponse;
}
