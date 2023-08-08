import type {AuthenticationMethodsRegistrationCampaign} from './authenticationMethodsRegistrationCampaign';
import type {RegistrationEnforcement} from './registrationEnforcement';
import {serializeAuthenticationMethodsRegistrationCampaign} from './serializeAuthenticationMethodsRegistrationCampaign';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRegistrationEnforcement(writer: SerializationWriter, registrationEnforcement: RegistrationEnforcement | undefined = {} as RegistrationEnforcement) : void {
        writer.writeObjectValue<AuthenticationMethodsRegistrationCampaign>("authenticationMethodsRegistrationCampaign", registrationEnforcement.authenticationMethodsRegistrationCampaign, serializeAuthenticationMethodsRegistrationCampaign);
        writer.writeStringValue("@odata.type", registrationEnforcement.odataType);
        writer.writeAdditionalData(registrationEnforcement.additionalData);
}
