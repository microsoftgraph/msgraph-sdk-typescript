import {AccessPackageAssignmentRequestCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageAssignmentRequestCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageAssignmentRequestCollectionResponseImpl();
}
