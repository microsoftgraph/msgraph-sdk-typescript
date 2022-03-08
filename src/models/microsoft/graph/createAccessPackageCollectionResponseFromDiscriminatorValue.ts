import {AccessPackageCollectionResponse} from './accessPackageCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageCollectionResponse();
}
