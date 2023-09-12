import { deserializeIntoEmailAuthenticationMethodConfiguration } from './deserializeIntoEmailAuthenticationMethodConfiguration';
import { type EmailAuthenticationMethodConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEmailAuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEmailAuthenticationMethodConfiguration;
}
