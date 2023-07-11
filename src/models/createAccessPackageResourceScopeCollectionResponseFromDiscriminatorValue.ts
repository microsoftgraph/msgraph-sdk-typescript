import {deserializeIntoAccessPackageResourceScopeCollectionResponse} from './deserializeIntoAccessPackageResourceScopeCollectionResponse';
import {AccessPackageResourceScopeCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageResourceScopeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageResourceScopeCollectionResponse;
}
