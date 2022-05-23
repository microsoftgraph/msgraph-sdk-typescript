import {AuthenticationMethodsRegistrationCampaignImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodsRegistrationCampaignFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodsRegistrationCampaignImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationMethodsRegistrationCampaignImpl();
}
