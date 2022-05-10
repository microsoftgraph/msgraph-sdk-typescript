import {ConfigurationManagerClientEnabledFeaturesImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConfigurationManagerClientEnabledFeaturesFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConfigurationManagerClientEnabledFeaturesImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConfigurationManagerClientEnabledFeaturesImpl();
}
