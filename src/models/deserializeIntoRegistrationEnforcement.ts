import type {AuthenticationMethodsRegistrationCampaign} from './authenticationMethodsRegistrationCampaign';
import {createAuthenticationMethodsRegistrationCampaignFromDiscriminatorValue} from './createAuthenticationMethodsRegistrationCampaignFromDiscriminatorValue';
import type {RegistrationEnforcement} from './registrationEnforcement';
import {serializeAuthenticationMethodsRegistrationCampaign} from './serializeAuthenticationMethodsRegistrationCampaign';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRegistrationEnforcement(registrationEnforcement: RegistrationEnforcement | undefined = {} as RegistrationEnforcement) : Record<string, (node: ParseNode) => void> {
    return {
        "authenticationMethodsRegistrationCampaign": n => { registrationEnforcement.authenticationMethodsRegistrationCampaign = n.getObjectValue<AuthenticationMethodsRegistrationCampaign>(createAuthenticationMethodsRegistrationCampaignFromDiscriminatorValue); },
        "@odata.type": n => { registrationEnforcement.odataType = n.getStringValue(); },
    }
}
