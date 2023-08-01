import type {ManagedAppPolicyDeploymentSummary} from './managedAppPolicyDeploymentSummary';
import type {ManagedMobileApp} from './managedMobileApp';
import {serializeManagedAppConfiguration} from './serializeManagedAppConfiguration';
import {serializeManagedAppPolicyDeploymentSummary} from './serializeManagedAppPolicyDeploymentSummary';
import {serializeManagedMobileApp} from './serializeManagedMobileApp';
import {serializeTargetedManagedAppPolicyAssignment} from './serializeTargetedManagedAppPolicyAssignment';
import type {TargetedManagedAppConfiguration} from './targetedManagedAppConfiguration';
import type {TargetedManagedAppPolicyAssignment} from './targetedManagedAppPolicyAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTargetedManagedAppConfiguration(writer: SerializationWriter, targetedManagedAppConfiguration: TargetedManagedAppConfiguration | undefined = {} as TargetedManagedAppConfiguration) : void {
        serializeManagedAppConfiguration(writer, targetedManagedAppConfiguration)
        writer.writeCollectionOfObjectValues<ManagedMobileApp>("apps", targetedManagedAppConfiguration.apps, serializeManagedMobileApp);
        writer.writeCollectionOfObjectValues<TargetedManagedAppPolicyAssignment>("assignments", targetedManagedAppConfiguration.assignments, serializeTargetedManagedAppPolicyAssignment);
        writer.writeNumberValue("deployedAppCount", targetedManagedAppConfiguration.deployedAppCount);
        writer.writeObjectValue<ManagedAppPolicyDeploymentSummary>("deploymentSummary", targetedManagedAppConfiguration.deploymentSummary, serializeManagedAppPolicyDeploymentSummary);
        writer.writeBooleanValue("isAssigned", targetedManagedAppConfiguration.isAssigned);
}
