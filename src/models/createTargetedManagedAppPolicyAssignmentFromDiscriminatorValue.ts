import {TargetedManagedAppPolicyAssignmentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : TargetedManagedAppPolicyAssignmentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TargetedManagedAppPolicyAssignmentImpl();
}
