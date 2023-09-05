import { AdvancedConfigState } from './advancedConfigState';
import { type AuthenticationMethodFeatureConfiguration } from './authenticationMethodFeatureConfiguration';
import { type FeatureTarget } from './featureTarget';
import { serializeFeatureTarget } from './serializeFeatureTarget';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodFeatureConfiguration(writer: SerializationWriter, authenticationMethodFeatureConfiguration: AuthenticationMethodFeatureConfiguration | undefined = {} as AuthenticationMethodFeatureConfiguration) : void {
        writer.writeObjectValue<FeatureTarget>("excludeTarget", authenticationMethodFeatureConfiguration.excludeTarget, serializeFeatureTarget);
        writer.writeObjectValue<FeatureTarget>("includeTarget", authenticationMethodFeatureConfiguration.includeTarget, serializeFeatureTarget);
        writer.writeStringValue("@odata.type", authenticationMethodFeatureConfiguration.odataType);
        writer.writeEnumValue<AdvancedConfigState>("state", authenticationMethodFeatureConfiguration.state);
        writer.writeAdditionalData(authenticationMethodFeatureConfiguration.additionalData);
}
