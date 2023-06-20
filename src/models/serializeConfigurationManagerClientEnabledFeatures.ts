import {ConfigurationManagerClientEnabledFeatures} from './configurationManagerClientEnabledFeatures';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConfigurationManagerClientEnabledFeatures(configurationManagerClientEnabledFeatures: ConfigurationManagerClientEnabledFeatures | undefined = {} as ConfigurationManagerClientEnabledFeatures, writer: SerializationWriter) : void {
        writer.writeBooleanValue("compliancePolicy", configurationManagerClientEnabledFeatures.compliancePolicy);
        writer.writeBooleanValue("deviceConfiguration", configurationManagerClientEnabledFeatures.deviceConfiguration);
        writer.writeBooleanValue("inventory", configurationManagerClientEnabledFeatures.inventory);
        writer.writeBooleanValue("modernApps", configurationManagerClientEnabledFeatures.modernApps);
        writer.writeStringValue("@odata.type", configurationManagerClientEnabledFeatures.odataType);
        writer.writeBooleanValue("resourceAccess", configurationManagerClientEnabledFeatures.resourceAccess);
        writer.writeBooleanValue("windowsUpdateForBusiness", configurationManagerClientEnabledFeatures.windowsUpdateForBusiness);
        writer.writeAdditionalData(configurationManagerClientEnabledFeatures.additionalData);
}
