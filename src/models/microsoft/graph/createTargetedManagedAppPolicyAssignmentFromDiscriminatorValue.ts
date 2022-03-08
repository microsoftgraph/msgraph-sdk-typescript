import {TargetedManagedAppPolicyAssignment} from './targetedManagedAppPolicyAssignment';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : TargetedManagedAppPolicyAssignment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TargetedManagedAppPolicyAssignment();
}
