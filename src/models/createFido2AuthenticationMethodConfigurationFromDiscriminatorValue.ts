import { deserializeIntoFido2AuthenticationMethodConfiguration } from './deserializeIntoFido2AuthenticationMethodConfiguration';
import { type Fido2AuthenticationMethodConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFido2AuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFido2AuthenticationMethodConfiguration;
}
