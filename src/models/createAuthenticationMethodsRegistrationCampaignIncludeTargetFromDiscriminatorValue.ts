import {deserializeIntoAuthenticationMethodsRegistrationCampaignIncludeTarget} from './deserializeIntoAuthenticationMethodsRegistrationCampaignIncludeTarget';
import {AuthenticationMethodsRegistrationCampaignIncludeTarget} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodsRegistrationCampaignIncludeTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthenticationMethodsRegistrationCampaignIncludeTarget;
}
