import {deserializeIntoAccessPackageResourceCollectionResponse} from './deserializeIntoAccessPackageResourceCollectionResponse';
import {AccessPackageResourceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageResourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageResourceCollectionResponse;
}
