import {AccessPackageCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageCollectionResponseImpl();
}
