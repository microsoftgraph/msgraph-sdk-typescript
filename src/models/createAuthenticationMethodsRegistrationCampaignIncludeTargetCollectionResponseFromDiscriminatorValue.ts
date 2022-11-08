import {AuthenticationMethodsRegistrationCampaignIncludeTargetCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodsRegistrationCampaignIncludeTargetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodsRegistrationCampaignIncludeTargetCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationMethodsRegistrationCampaignIncludeTargetCollectionResponse();
}
