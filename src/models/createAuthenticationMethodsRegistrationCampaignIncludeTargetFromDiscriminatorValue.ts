import {AuthenticationMethodsRegistrationCampaignIncludeTargetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodsRegistrationCampaignIncludeTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodsRegistrationCampaignIncludeTargetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationMethodsRegistrationCampaignIncludeTargetImpl();
}
