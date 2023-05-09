import {deserializeIntoSocialIdentityProvider} from './deserializeIntoSocialIdentityProvider';
import {SocialIdentityProvider} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSocialIdentityProviderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSocialIdentityProvider;
}
