import {SocialIdentityProviderImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSocialIdentityProviderFromDiscriminatorValue(parseNode: ParseNode | undefined) : SocialIdentityProviderImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SocialIdentityProviderImpl();
}
