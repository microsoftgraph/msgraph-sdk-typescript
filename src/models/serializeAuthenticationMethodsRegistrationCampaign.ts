import { AdvancedConfigState } from './advancedConfigState';
import { type AuthenticationMethodsRegistrationCampaign } from './authenticationMethodsRegistrationCampaign';
import { type AuthenticationMethodsRegistrationCampaignIncludeTarget } from './authenticationMethodsRegistrationCampaignIncludeTarget';
import { type ExcludeTarget } from './excludeTarget';
import { serializeAuthenticationMethodsRegistrationCampaignIncludeTarget } from './serializeAuthenticationMethodsRegistrationCampaignIncludeTarget';
import { serializeExcludeTarget } from './serializeExcludeTarget';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodsRegistrationCampaign(writer: SerializationWriter, authenticationMethodsRegistrationCampaign: AuthenticationMethodsRegistrationCampaign | undefined = {} as AuthenticationMethodsRegistrationCampaign) : void {
        writer.writeCollectionOfObjectValues<ExcludeTarget>("excludeTargets", authenticationMethodsRegistrationCampaign.excludeTargets, serializeExcludeTarget);
        writer.writeCollectionOfObjectValues<AuthenticationMethodsRegistrationCampaignIncludeTarget>("includeTargets", authenticationMethodsRegistrationCampaign.includeTargets, serializeAuthenticationMethodsRegistrationCampaignIncludeTarget);
        writer.writeStringValue("@odata.type", authenticationMethodsRegistrationCampaign.odataType);
        writer.writeNumberValue("snoozeDurationInDays", authenticationMethodsRegistrationCampaign.snoozeDurationInDays);
        writer.writeEnumValue<AdvancedConfigState>("state", authenticationMethodsRegistrationCampaign.state);
        writer.writeAdditionalData(authenticationMethodsRegistrationCampaign.additionalData);
}
