import {deserializeIntoAuthenticationMethodsRegistrationCampaign} from './deserializeIntoAuthenticationMethodsRegistrationCampaign';
import {AuthenticationMethodsRegistrationCampaign} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodsRegistrationCampaignFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthenticationMethodsRegistrationCampaign;
}
