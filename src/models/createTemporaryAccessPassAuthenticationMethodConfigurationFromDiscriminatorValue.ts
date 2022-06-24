import {TemporaryAccessPassAuthenticationMethodConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTemporaryAccessPassAuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : TemporaryAccessPassAuthenticationMethodConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TemporaryAccessPassAuthenticationMethodConfigurationImpl();
}
