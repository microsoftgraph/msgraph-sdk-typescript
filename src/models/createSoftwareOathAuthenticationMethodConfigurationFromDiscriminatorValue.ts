import { deserializeIntoSoftwareOathAuthenticationMethodConfiguration } from './deserializeIntoSoftwareOathAuthenticationMethodConfiguration';
import { type SoftwareOathAuthenticationMethodConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSoftwareOathAuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSoftwareOathAuthenticationMethodConfiguration;
}
