import { deserializeIntoTargetedManagedAppPolicyAssignment } from './deserializeIntoTargetedManagedAppPolicyAssignment';
import { type TargetedManagedAppPolicyAssignment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTargetedManagedAppPolicyAssignment;
}
