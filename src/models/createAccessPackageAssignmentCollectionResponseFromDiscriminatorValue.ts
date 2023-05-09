import {deserializeIntoAccessPackageAssignmentCollectionResponse} from './deserializeIntoAccessPackageAssignmentCollectionResponse';
import {AccessPackageAssignmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAssignmentCollectionResponse;
}
