import {deserializeIntoSmsAuthenticationMethodConfiguration} from './deserializeIntoSmsAuthenticationMethodConfiguration';
import {SmsAuthenticationMethodConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSmsAuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSmsAuthenticationMethodConfiguration;
}
