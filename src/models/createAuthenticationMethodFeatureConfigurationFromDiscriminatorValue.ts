import {AuthenticationMethodFeatureConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodFeatureConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodFeatureConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationMethodFeatureConfiguration();
}
