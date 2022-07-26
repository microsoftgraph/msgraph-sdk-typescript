import {EmailAuthenticationMethodConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmailAuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : EmailAuthenticationMethodConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EmailAuthenticationMethodConfiguration();
}
