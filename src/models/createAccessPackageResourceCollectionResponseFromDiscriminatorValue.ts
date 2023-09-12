import { deserializeIntoAccessPackageResourceCollectionResponse } from './deserializeIntoAccessPackageResourceCollectionResponse';
import { type AccessPackageResourceCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageResourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageResourceCollectionResponse;
}
