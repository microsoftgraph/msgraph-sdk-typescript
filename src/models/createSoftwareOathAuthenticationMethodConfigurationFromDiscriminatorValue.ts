import {SoftwareOathAuthenticationMethodConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSoftwareOathAuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : SoftwareOathAuthenticationMethodConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SoftwareOathAuthenticationMethodConfiguration();
}
