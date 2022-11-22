import {SocialIdentityProviderCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSocialIdentityProviderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SocialIdentityProviderCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SocialIdentityProviderCollectionResponse();
}
