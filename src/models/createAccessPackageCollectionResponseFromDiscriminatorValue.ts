import {deserializeIntoAccessPackageCollectionResponse} from './deserializeIntoAccessPackageCollectionResponse';
import {AccessPackageCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageCollectionResponse;
}
