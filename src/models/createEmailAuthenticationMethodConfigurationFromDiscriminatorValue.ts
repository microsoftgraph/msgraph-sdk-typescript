import {EmailAuthenticationMethodConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmailAuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : EmailAuthenticationMethodConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EmailAuthenticationMethodConfigurationImpl();
}
