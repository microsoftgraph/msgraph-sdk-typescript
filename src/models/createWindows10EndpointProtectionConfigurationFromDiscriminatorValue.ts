import {deserializeIntoWindows10EndpointProtectionConfiguration} from './deserializeIntoWindows10EndpointProtectionConfiguration';
import {Windows10EndpointProtectionConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10EndpointProtectionConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindows10EndpointProtectionConfiguration;
}
