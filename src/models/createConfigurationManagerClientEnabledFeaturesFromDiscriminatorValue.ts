import { deserializeIntoConfigurationManagerClientEnabledFeatures } from './deserializeIntoConfigurationManagerClientEnabledFeatures';
import { type ConfigurationManagerClientEnabledFeatures } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConfigurationManagerClientEnabledFeaturesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConfigurationManagerClientEnabledFeatures;
}
