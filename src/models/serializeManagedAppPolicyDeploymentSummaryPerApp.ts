import { type ManagedAppPolicyDeploymentSummaryPerApp } from './managedAppPolicyDeploymentSummaryPerApp';
import { type MobileAppIdentifier } from './mobileAppIdentifier';
import { serializeMobileAppIdentifier } from './serializeMobileAppIdentifier';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeManagedAppPolicyDeploymentSummaryPerApp(writer: SerializationWriter, managedAppPolicyDeploymentSummaryPerApp: ManagedAppPolicyDeploymentSummaryPerApp | undefined = {} as ManagedAppPolicyDeploymentSummaryPerApp) : void {
        writer.writeNumberValue("configurationAppliedUserCount", managedAppPolicyDeploymentSummaryPerApp.configurationAppliedUserCount);
        writer.writeObjectValue<MobileAppIdentifier>("mobileAppIdentifier", managedAppPolicyDeploymentSummaryPerApp.mobileAppIdentifier, serializeMobileAppIdentifier);
        writer.writeStringValue("@odata.type", managedAppPolicyDeploymentSummaryPerApp.odataType);
        writer.writeAdditionalData(managedAppPolicyDeploymentSummaryPerApp.additionalData);
}
