import {Fido2AuthenticationMethodConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFido2AuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Fido2AuthenticationMethodConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Fido2AuthenticationMethodConfiguration();
}
