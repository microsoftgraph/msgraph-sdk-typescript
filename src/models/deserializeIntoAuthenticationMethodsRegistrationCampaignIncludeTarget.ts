import {AuthenticationMethodsRegistrationCampaignIncludeTarget} from './authenticationMethodsRegistrationCampaignIncludeTarget';
import {AuthenticationMethodTargetType} from './authenticationMethodTargetType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationMethodsRegistrationCampaignIncludeTarget(authenticationMethodsRegistrationCampaignIncludeTarget: AuthenticationMethodsRegistrationCampaignIncludeTarget | undefined = {} as AuthenticationMethodsRegistrationCampaignIncludeTarget) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { authenticationMethodsRegistrationCampaignIncludeTarget.id = n.getStringValue(); },
        "@odata.type": n => { authenticationMethodsRegistrationCampaignIncludeTarget.odataType = n.getStringValue(); },
        "targetedAuthenticationMethod": n => { authenticationMethodsRegistrationCampaignIncludeTarget.targetedAuthenticationMethod = n.getStringValue(); },
        "targetType": n => { authenticationMethodsRegistrationCampaignIncludeTarget.targetType = n.getEnumValue<AuthenticationMethodTargetType>(AuthenticationMethodTargetType); },
    }
}
