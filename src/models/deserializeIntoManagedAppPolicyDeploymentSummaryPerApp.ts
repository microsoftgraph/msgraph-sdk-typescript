import { createMobileAppIdentifierFromDiscriminatorValue } from './createMobileAppIdentifierFromDiscriminatorValue';
import { type ManagedAppPolicyDeploymentSummaryPerApp } from './managedAppPolicyDeploymentSummaryPerApp';
import { type MobileAppIdentifier } from './mobileAppIdentifier';
import { serializeMobileAppIdentifier } from './serializeMobileAppIdentifier';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppPolicyDeploymentSummaryPerApp(managedAppPolicyDeploymentSummaryPerApp: ManagedAppPolicyDeploymentSummaryPerApp | undefined = {} as ManagedAppPolicyDeploymentSummaryPerApp) : Record<string, (node: ParseNode) => void> {
    return {
        "configurationAppliedUserCount": n => { managedAppPolicyDeploymentSummaryPerApp.configurationAppliedUserCount = n.getNumberValue(); },
        "mobileAppIdentifier": n => { managedAppPolicyDeploymentSummaryPerApp.mobileAppIdentifier = n.getObjectValue<MobileAppIdentifier>(createMobileAppIdentifierFromDiscriminatorValue); },
        "@odata.type": n => { managedAppPolicyDeploymentSummaryPerApp.odataType = n.getStringValue(); },
    }
}
