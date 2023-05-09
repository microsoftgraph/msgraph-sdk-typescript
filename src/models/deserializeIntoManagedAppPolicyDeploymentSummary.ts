import {createManagedAppPolicyDeploymentSummaryPerAppFromDiscriminatorValue} from './createManagedAppPolicyDeploymentSummaryPerAppFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ManagedAppPolicyDeploymentSummary} from './managedAppPolicyDeploymentSummary';
import {ManagedAppPolicyDeploymentSummaryPerApp} from './managedAppPolicyDeploymentSummaryPerApp';
import {serializeManagedAppPolicyDeploymentSummaryPerApp} from './serializeManagedAppPolicyDeploymentSummaryPerApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppPolicyDeploymentSummary(managedAppPolicyDeploymentSummary: ManagedAppPolicyDeploymentSummary | undefined = {} as ManagedAppPolicyDeploymentSummary) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedAppPolicyDeploymentSummary),
        "configurationDeployedUserCount": n => { managedAppPolicyDeploymentSummary.configurationDeployedUserCount = n.getNumberValue(); },
        "configurationDeploymentSummaryPerApp": n => { managedAppPolicyDeploymentSummary.configurationDeploymentSummaryPerApp = n.getCollectionOfObjectValues<ManagedAppPolicyDeploymentSummaryPerApp>(createManagedAppPolicyDeploymentSummaryPerAppFromDiscriminatorValue); },
        "displayName": n => { managedAppPolicyDeploymentSummary.displayName = n.getStringValue(); },
        "lastRefreshTime": n => { managedAppPolicyDeploymentSummary.lastRefreshTime = n.getDateValue(); },
        "version": n => { managedAppPolicyDeploymentSummary.version = n.getStringValue(); },
    }
}
