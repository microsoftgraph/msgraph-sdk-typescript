import { type ConfigurationManagerClientEnabledFeatures } from './configurationManagerClientEnabledFeatures';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeConfigurationManagerClientEnabledFeatures(writer: SerializationWriter, configurationManagerClientEnabledFeatures: ConfigurationManagerClientEnabledFeatures | undefined = {} as ConfigurationManagerClientEnabledFeatures) : void {
        writer.writeBooleanValue("compliancePolicy", configurationManagerClientEnabledFeatures.compliancePolicy);
        writer.writeBooleanValue("deviceConfiguration", configurationManagerClientEnabledFeatures.deviceConfiguration);
        writer.writeBooleanValue("inventory", configurationManagerClientEnabledFeatures.inventory);
        writer.writeBooleanValue("modernApps", configurationManagerClientEnabledFeatures.modernApps);
        writer.writeStringValue("@odata.type", configurationManagerClientEnabledFeatures.odataType);
        writer.writeBooleanValue("resourceAccess", configurationManagerClientEnabledFeatures.resourceAccess);
        writer.writeBooleanValue("windowsUpdateForBusiness", configurationManagerClientEnabledFeatures.windowsUpdateForBusiness);
        writer.writeAdditionalData(configurationManagerClientEnabledFeatures.additionalData);
}
