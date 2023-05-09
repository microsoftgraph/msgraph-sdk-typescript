import {deserializeIntoAuthenticationMethodFeatureConfiguration} from './deserializeIntoAuthenticationMethodFeatureConfiguration';
import {AuthenticationMethodFeatureConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodFeatureConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthenticationMethodFeatureConfiguration;
}
