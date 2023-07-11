import {deserializeIntoAccessPackageResourceRequestCollectionResponse} from './deserializeIntoAccessPackageResourceRequestCollectionResponse';
import {AccessPackageResourceRequestCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageResourceRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageResourceRequestCollectionResponse;
}
