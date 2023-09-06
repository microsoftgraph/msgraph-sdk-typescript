import { deserializeIntoTargetedManagedAppPolicyAssignmentCollectionResponse } from './deserializeIntoTargetedManagedAppPolicyAssignmentCollectionResponse';
import { type TargetedManagedAppPolicyAssignmentCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTargetedManagedAppPolicyAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTargetedManagedAppPolicyAssignmentCollectionResponse;
}
