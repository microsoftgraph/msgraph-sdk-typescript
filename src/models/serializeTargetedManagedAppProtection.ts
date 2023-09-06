import { serializeManagedAppProtection } from './serializeManagedAppProtection';
import { serializeTargetedManagedAppPolicyAssignment } from './serializeTargetedManagedAppPolicyAssignment';
import { type TargetedManagedAppPolicyAssignment } from './targetedManagedAppPolicyAssignment';
import { type TargetedManagedAppProtection } from './targetedManagedAppProtection';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTargetedManagedAppProtection(writer: SerializationWriter, targetedManagedAppProtection: TargetedManagedAppProtection | undefined = {} as TargetedManagedAppProtection) : void {
        serializeManagedAppProtection(writer, targetedManagedAppProtection)
        writer.writeCollectionOfObjectValues<TargetedManagedAppPolicyAssignment>("assignments", targetedManagedAppProtection.assignments, serializeTargetedManagedAppPolicyAssignment);
        writer.writeBooleanValue("isAssigned", targetedManagedAppProtection.isAssigned);
}
