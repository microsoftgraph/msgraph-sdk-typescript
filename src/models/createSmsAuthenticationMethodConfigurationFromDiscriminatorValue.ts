import {SmsAuthenticationMethodConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSmsAuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : SmsAuthenticationMethodConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SmsAuthenticationMethodConfiguration();
}
