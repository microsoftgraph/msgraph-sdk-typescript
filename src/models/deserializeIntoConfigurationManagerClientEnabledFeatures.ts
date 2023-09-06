import { type ConfigurationManagerClientEnabledFeatures } from './configurationManagerClientEnabledFeatures';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoConfigurationManagerClientEnabledFeatures(configurationManagerClientEnabledFeatures: ConfigurationManagerClientEnabledFeatures | undefined = {} as ConfigurationManagerClientEnabledFeatures) : Record<string, (node: ParseNode) => void> {
    return {
        "compliancePolicy": n => { configurationManagerClientEnabledFeatures.compliancePolicy = n.getBooleanValue(); },
        "deviceConfiguration": n => { configurationManagerClientEnabledFeatures.deviceConfiguration = n.getBooleanValue(); },
        "inventory": n => { configurationManagerClientEnabledFeatures.inventory = n.getBooleanValue(); },
        "modernApps": n => { configurationManagerClientEnabledFeatures.modernApps = n.getBooleanValue(); },
        "@odata.type": n => { configurationManagerClientEnabledFeatures.odataType = n.getStringValue(); },
        "resourceAccess": n => { configurationManagerClientEnabledFeatures.resourceAccess = n.getBooleanValue(); },
        "windowsUpdateForBusiness": n => { configurationManagerClientEnabledFeatures.windowsUpdateForBusiness = n.getBooleanValue(); },
    }
}
