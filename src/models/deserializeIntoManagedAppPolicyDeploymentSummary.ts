import { createManagedAppPolicyDeploymentSummaryPerAppFromDiscriminatorValue } from './createManagedAppPolicyDeploymentSummaryPerAppFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type ManagedAppPolicyDeploymentSummary } from './managedAppPolicyDeploymentSummary';
import { type ManagedAppPolicyDeploymentSummaryPerApp } from './managedAppPolicyDeploymentSummaryPerApp';
import { serializeManagedAppPolicyDeploymentSummaryPerApp } from './serializeManagedAppPolicyDeploymentSummaryPerApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

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
