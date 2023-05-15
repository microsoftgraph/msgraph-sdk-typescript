import {AuthenticationMethodsRegistrationCampaign} from './authenticationMethodsRegistrationCampaign';
import {RegistrationEnforcement} from './registrationEnforcement';
import {serializeAuthenticationMethodsRegistrationCampaign} from './serializeAuthenticationMethodsRegistrationCampaign';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRegistrationEnforcement(writer: SerializationWriter, registrationEnforcement: RegistrationEnforcement | undefined = {} as RegistrationEnforcement) : void {
        writer.writeObjectValue<AuthenticationMethodsRegistrationCampaign>("authenticationMethodsRegistrationCampaign", registrationEnforcement.authenticationMethodsRegistrationCampaign, serializeAuthenticationMethodsRegistrationCampaign);
        writer.writeStringValue("@odata.type", registrationEnforcement.odataType);
        writer.writeAdditionalData(registrationEnforcement.additionalData);
}
