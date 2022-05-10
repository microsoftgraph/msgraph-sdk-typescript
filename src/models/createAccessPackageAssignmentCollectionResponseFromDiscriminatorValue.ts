import {AccessPackageAssignmentCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageAssignmentCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageAssignmentCollectionResponseImpl();
}
