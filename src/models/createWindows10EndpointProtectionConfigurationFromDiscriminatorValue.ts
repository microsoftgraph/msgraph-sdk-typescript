import {Windows10EndpointProtectionConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10EndpointProtectionConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10EndpointProtectionConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10EndpointProtectionConfiguration();
}
