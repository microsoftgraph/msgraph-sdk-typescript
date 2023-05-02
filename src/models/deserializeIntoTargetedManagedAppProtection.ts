import {createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue} from './createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue';
import {deserializeIntoManagedAppProtection} from './deserializeIntoManagedAppProtection';
import {serializeTargetedManagedAppPolicyAssignment} from './serializeTargetedManagedAppPolicyAssignment';
import {TargetedManagedAppPolicyAssignment} from './targetedManagedAppPolicyAssignment';
import {TargetedManagedAppProtection} from './targetedManagedAppProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetedManagedAppProtection(targetedManagedAppProtection: TargetedManagedAppProtection | undefined = {} as TargetedManagedAppProtection) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedAppProtection(targetedManagedAppProtection),
        "assignments": n => { targetedManagedAppProtection.assignments = n.getCollectionOfObjectValues<TargetedManagedAppPolicyAssignment>(createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue); },
        "isAssigned": n => { targetedManagedAppProtection.isAssigned = n.getBooleanValue(); },
    }
}
