import {deserializeIntoTemporaryAccessPassAuthenticationMethodConfiguration} from './deserializeIntoTemporaryAccessPassAuthenticationMethodConfiguration';
import {TemporaryAccessPassAuthenticationMethodConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTemporaryAccessPassAuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTemporaryAccessPassAuthenticationMethodConfiguration;
}
