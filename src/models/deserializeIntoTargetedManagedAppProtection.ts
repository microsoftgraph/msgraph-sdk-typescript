import { createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue } from './createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue';
import { deserializeIntoManagedAppProtection } from './deserializeIntoManagedAppProtection';
import { serializeTargetedManagedAppPolicyAssignment } from './serializeTargetedManagedAppPolicyAssignment';
import { type TargetedManagedAppPolicyAssignment } from './targetedManagedAppPolicyAssignment';
import { type TargetedManagedAppProtection } from './targetedManagedAppProtection';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetedManagedAppProtection(targetedManagedAppProtection: TargetedManagedAppProtection | undefined = {} as TargetedManagedAppProtection) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedAppProtection(targetedManagedAppProtection),
        "assignments": n => { targetedManagedAppProtection.assignments = n.getCollectionOfObjectValues<TargetedManagedAppPolicyAssignment>(createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue); },
        "isAssigned": n => { targetedManagedAppProtection.isAssigned = n.getBooleanValue(); },
    }
}
