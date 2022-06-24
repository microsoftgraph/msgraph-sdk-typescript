import {Fido2AuthenticationMethodConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFido2AuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Fido2AuthenticationMethodConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Fido2AuthenticationMethodConfigurationImpl();
}
