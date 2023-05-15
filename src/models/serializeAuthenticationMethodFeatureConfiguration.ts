import {AdvancedConfigState} from './advancedConfigState';
import {AuthenticationMethodFeatureConfiguration} from './authenticationMethodFeatureConfiguration';
import {FeatureTarget} from './featureTarget';
import {serializeFeatureTarget} from './serializeFeatureTarget';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodFeatureConfiguration(writer: SerializationWriter, authenticationMethodFeatureConfiguration: AuthenticationMethodFeatureConfiguration | undefined = {} as AuthenticationMethodFeatureConfiguration) : void {
        writer.writeObjectValue<FeatureTarget>("excludeTarget", authenticationMethodFeatureConfiguration.excludeTarget, serializeFeatureTarget);
        writer.writeObjectValue<FeatureTarget>("includeTarget", authenticationMethodFeatureConfiguration.includeTarget, serializeFeatureTarget);
        writer.writeStringValue("@odata.type", authenticationMethodFeatureConfiguration.odataType);
        writer.writeEnumValue<AdvancedConfigState>("state", authenticationMethodFeatureConfiguration.state);
        writer.writeAdditionalData(authenticationMethodFeatureConfiguration.additionalData);
}
