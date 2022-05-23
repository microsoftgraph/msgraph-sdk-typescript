import {TargetedManagedAppPolicyAssignmentCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetedManagedAppPolicyAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TargetedManagedAppPolicyAssignmentCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TargetedManagedAppPolicyAssignmentCollectionResponseImpl();
}
