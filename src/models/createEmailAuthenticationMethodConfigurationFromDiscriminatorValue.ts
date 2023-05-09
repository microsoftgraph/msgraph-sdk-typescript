import {deserializeIntoEmailAuthenticationMethodConfiguration} from './deserializeIntoEmailAuthenticationMethodConfiguration';
import {EmailAuthenticationMethodConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmailAuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEmailAuthenticationMethodConfiguration;
}
