import { deserializeIntoIdentityProviderBase } from './deserializeIntoIdentityProviderBase';
import { type SocialIdentityProvider } from './socialIdentityProvider';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSocialIdentityProvider(socialIdentityProvider: SocialIdentityProvider | undefined = {} as SocialIdentityProvider) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentityProviderBase(socialIdentityProvider),
        "clientId": n => { socialIdentityProvider.clientId = n.getStringValue(); },
        "clientSecret": n => { socialIdentityProvider.clientSecret = n.getStringValue(); },
        "identityProviderType": n => { socialIdentityProvider.identityProviderType = n.getStringValue(); },
    }
}
