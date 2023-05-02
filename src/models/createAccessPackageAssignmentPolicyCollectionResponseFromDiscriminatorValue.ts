import {deserializeIntoAccessPackageAssignmentPolicyCollectionResponse} from './deserializeIntoAccessPackageAssignmentPolicyCollectionResponse';
import {AccessPackageAssignmentPolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAssignmentPolicyCollectionResponse;
}
