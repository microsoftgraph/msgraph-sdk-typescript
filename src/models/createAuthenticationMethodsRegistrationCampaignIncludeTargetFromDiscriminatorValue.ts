import { deserializeIntoAuthenticationMethodsRegistrationCampaignIncludeTarget } from './deserializeIntoAuthenticationMethodsRegistrationCampaignIncludeTarget';
import { type AuthenticationMethodsRegistrationCampaignIncludeTarget } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodsRegistrationCampaignIncludeTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthenticationMethodsRegistrationCampaignIncludeTarget;
}
