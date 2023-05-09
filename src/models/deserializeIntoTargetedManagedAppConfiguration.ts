import {createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue} from './createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue';
import {createManagedMobileAppFromDiscriminatorValue} from './createManagedMobileAppFromDiscriminatorValue';
import {createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue} from './createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue';
import {deserializeIntoManagedAppConfiguration} from './deserializeIntoManagedAppConfiguration';
import {ManagedAppPolicyDeploymentSummary} from './managedAppPolicyDeploymentSummary';
import {ManagedMobileApp} from './managedMobileApp';
import {serializeManagedAppPolicyDeploymentSummary} from './serializeManagedAppPolicyDeploymentSummary';
import {serializeManagedMobileApp} from './serializeManagedMobileApp';
import {serializeTargetedManagedAppPolicyAssignment} from './serializeTargetedManagedAppPolicyAssignment';
import {TargetedManagedAppConfiguration} from './targetedManagedAppConfiguration';
import {TargetedManagedAppPolicyAssignment} from './targetedManagedAppPolicyAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetedManagedAppConfiguration(targetedManagedAppConfiguration: TargetedManagedAppConfiguration | undefined = {} as TargetedManagedAppConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedAppConfiguration(targetedManagedAppConfiguration),
        "apps": n => { targetedManagedAppConfiguration.apps = n.getCollectionOfObjectValues<ManagedMobileApp>(createManagedMobileAppFromDiscriminatorValue); },
        "assignments": n => { targetedManagedAppConfiguration.assignments = n.getCollectionOfObjectValues<TargetedManagedAppPolicyAssignment>(createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue); },
        "deployedAppCount": n => { targetedManagedAppConfiguration.deployedAppCount = n.getNumberValue(); },
        "deploymentSummary": n => { targetedManagedAppConfiguration.deploymentSummary = n.getObjectValue<ManagedAppPolicyDeploymentSummary>(createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue); },
        "isAssigned": n => { targetedManagedAppConfiguration.isAssigned = n.getBooleanValue(); },
    }
}
