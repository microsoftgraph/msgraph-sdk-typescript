import {ManagedAppPolicyDeploymentSummaryPerApp} from './managedAppPolicyDeploymentSummaryPerApp';
import {MobileAppIdentifier} from './mobileAppIdentifier';
import {serializeMobileAppIdentifier} from './serializeMobileAppIdentifier';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppPolicyDeploymentSummaryPerApp(managedAppPolicyDeploymentSummaryPerApp: ManagedAppPolicyDeploymentSummaryPerApp | undefined = {} as ManagedAppPolicyDeploymentSummaryPerApp, writer: SerializationWriter) : void {
        writer.writeNumberValue("configurationAppliedUserCount", managedAppPolicyDeploymentSummaryPerApp.configurationAppliedUserCount);
        writer.writeObjectValue<MobileAppIdentifier>("mobileAppIdentifier", managedAppPolicyDeploymentSummaryPerApp.mobileAppIdentifier, serializeMobileAppIdentifier);
        writer.writeStringValue("@odata.type", managedAppPolicyDeploymentSummaryPerApp.odataType);
        writer.writeAdditionalData(managedAppPolicyDeploymentSummaryPerApp.additionalData);
}
