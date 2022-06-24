import {Windows10EndpointProtectionConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10EndpointProtectionConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10EndpointProtectionConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10EndpointProtectionConfigurationImpl();
}
