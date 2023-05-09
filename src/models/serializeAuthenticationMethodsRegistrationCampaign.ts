import {AdvancedConfigState} from './advancedConfigState';
import {AuthenticationMethodsRegistrationCampaign} from './authenticationMethodsRegistrationCampaign';
import {AuthenticationMethodsRegistrationCampaignIncludeTarget} from './authenticationMethodsRegistrationCampaignIncludeTarget';
import {ExcludeTarget} from './excludeTarget';
import {serializeAuthenticationMethodsRegistrationCampaignIncludeTarget} from './serializeAuthenticationMethodsRegistrationCampaignIncludeTarget';
import {serializeExcludeTarget} from './serializeExcludeTarget';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodsRegistrationCampaign(writer: SerializationWriter, authenticationMethodsRegistrationCampaign: AuthenticationMethodsRegistrationCampaign | undefined = {} as AuthenticationMethodsRegistrationCampaign) : void {
        writer.writeCollectionOfObjectValues<ExcludeTarget>("excludeTargets", authenticationMethodsRegistrationCampaign.excludeTargets, serializeExcludeTarget);
        writer.writeCollectionOfObjectValues<AuthenticationMethodsRegistrationCampaignIncludeTarget>("includeTargets", authenticationMethodsRegistrationCampaign.includeTargets, serializeAuthenticationMethodsRegistrationCampaignIncludeTarget);
        writer.writeStringValue("@odata.type", authenticationMethodsRegistrationCampaign.odataType);
        writer.writeNumberValue("snoozeDurationInDays", authenticationMethodsRegistrationCampaign.snoozeDurationInDays);
        writer.writeEnumValue<AdvancedConfigState>("state", authenticationMethodsRegistrationCampaign.state);
        writer.writeAdditionalData(authenticationMethodsRegistrationCampaign.additionalData);
}
