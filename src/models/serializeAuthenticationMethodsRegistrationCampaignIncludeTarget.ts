import {AuthenticationMethodsRegistrationCampaignIncludeTarget} from './authenticationMethodsRegistrationCampaignIncludeTarget';
import {AuthenticationMethodTargetType} from './authenticationMethodTargetType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodsRegistrationCampaignIncludeTarget(writer: SerializationWriter, authenticationMethodsRegistrationCampaignIncludeTarget: AuthenticationMethodsRegistrationCampaignIncludeTarget | undefined = {} as AuthenticationMethodsRegistrationCampaignIncludeTarget) : void {
        writer.writeStringValue("id", authenticationMethodsRegistrationCampaignIncludeTarget.id);
        writer.writeStringValue("@odata.type", authenticationMethodsRegistrationCampaignIncludeTarget.odataType);
        writer.writeStringValue("targetedAuthenticationMethod", authenticationMethodsRegistrationCampaignIncludeTarget.targetedAuthenticationMethod);
        writer.writeEnumValue<AuthenticationMethodTargetType>("targetType", authenticationMethodsRegistrationCampaignIncludeTarget.targetType);
        writer.writeAdditionalData(authenticationMethodsRegistrationCampaignIncludeTarget.additionalData);
}
