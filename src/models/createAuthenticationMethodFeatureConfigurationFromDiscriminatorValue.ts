import { deserializeIntoAuthenticationMethodFeatureConfiguration } from './deserializeIntoAuthenticationMethodFeatureConfiguration';
import { type AuthenticationMethodFeatureConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodFeatureConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthenticationMethodFeatureConfiguration;
}
