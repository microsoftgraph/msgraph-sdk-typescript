import {ManagedAppPolicyDeploymentSummary} from './managedAppPolicyDeploymentSummary';
import {ManagedAppPolicyDeploymentSummaryPerApp} from './managedAppPolicyDeploymentSummaryPerApp';
import {serializeEntity} from './serializeEntity';
import {serializeManagedAppPolicyDeploymentSummaryPerApp} from './serializeManagedAppPolicyDeploymentSummaryPerApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppPolicyDeploymentSummary(writer: SerializationWriter, managedAppPolicyDeploymentSummary: ManagedAppPolicyDeploymentSummary | undefined = {} as ManagedAppPolicyDeploymentSummary) : void {
        serializeEntity(writer, managedAppPolicyDeploymentSummary)
        writer.writeNumberValue("configurationDeployedUserCount", managedAppPolicyDeploymentSummary.configurationDeployedUserCount);
        writer.writeCollectionOfObjectValues<ManagedAppPolicyDeploymentSummaryPerApp>("configurationDeploymentSummaryPerApp", managedAppPolicyDeploymentSummary.configurationDeploymentSummaryPerApp, serializeManagedAppPolicyDeploymentSummaryPerApp);
        writer.writeStringValue("displayName", managedAppPolicyDeploymentSummary.displayName);
        writer.writeDateValue("lastRefreshTime", managedAppPolicyDeploymentSummary.lastRefreshTime);
        writer.writeStringValue("version", managedAppPolicyDeploymentSummary.version);
}
