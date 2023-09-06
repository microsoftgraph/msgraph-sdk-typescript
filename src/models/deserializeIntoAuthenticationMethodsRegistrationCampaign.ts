import { AdvancedConfigState } from './advancedConfigState';
import { type AuthenticationMethodsRegistrationCampaign } from './authenticationMethodsRegistrationCampaign';
import { type AuthenticationMethodsRegistrationCampaignIncludeTarget } from './authenticationMethodsRegistrationCampaignIncludeTarget';
import { createAuthenticationMethodsRegistrationCampaignIncludeTargetFromDiscriminatorValue } from './createAuthenticationMethodsRegistrationCampaignIncludeTargetFromDiscriminatorValue';
import { createExcludeTargetFromDiscriminatorValue } from './createExcludeTargetFromDiscriminatorValue';
import { type ExcludeTarget } from './excludeTarget';
import { serializeAuthenticationMethodsRegistrationCampaignIncludeTarget } from './serializeAuthenticationMethodsRegistrationCampaignIncludeTarget';
import { serializeExcludeTarget } from './serializeExcludeTarget';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationMethodsRegistrationCampaign(authenticationMethodsRegistrationCampaign: AuthenticationMethodsRegistrationCampaign | undefined = {} as AuthenticationMethodsRegistrationCampaign) : Record<string, (node: ParseNode) => void> {
    return {
        "excludeTargets": n => { authenticationMethodsRegistrationCampaign.excludeTargets = n.getCollectionOfObjectValues<ExcludeTarget>(createExcludeTargetFromDiscriminatorValue); },
        "includeTargets": n => { authenticationMethodsRegistrationCampaign.includeTargets = n.getCollectionOfObjectValues<AuthenticationMethodsRegistrationCampaignIncludeTarget>(createAuthenticationMethodsRegistrationCampaignIncludeTargetFromDiscriminatorValue); },
        "@odata.type": n => { authenticationMethodsRegistrationCampaign.odataType = n.getStringValue(); },
        "snoozeDurationInDays": n => { authenticationMethodsRegistrationCampaign.snoozeDurationInDays = n.getNumberValue(); },
        "state": n => { authenticationMethodsRegistrationCampaign.state = n.getEnumValue<AdvancedConfigState>(AdvancedConfigState); },
    }
}
