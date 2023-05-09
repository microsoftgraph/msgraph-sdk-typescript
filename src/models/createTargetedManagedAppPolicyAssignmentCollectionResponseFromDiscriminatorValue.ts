import {deserializeIntoTargetedManagedAppPolicyAssignmentCollectionResponse} from './deserializeIntoTargetedManagedAppPolicyAssignmentCollectionResponse';
import {TargetedManagedAppPolicyAssignmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetedManagedAppPolicyAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTargetedManagedAppPolicyAssignmentCollectionResponse;
}
