import {deserializeIntoIdentityProviderBase} from './deserializeIntoIdentityProviderBase';
import {SocialIdentityProvider} from './socialIdentityProvider';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSocialIdentityProvider(socialIdentityProvider: SocialIdentityProvider | undefined = {} as SocialIdentityProvider) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentityProviderBase(socialIdentityProvider),
        "clientId": n => { socialIdentityProvider.clientId = n.getStringValue(); },
        "clientSecret": n => { socialIdentityProvider.clientSecret = n.getStringValue(); },
        "identityProviderType": n => { socialIdentityProvider.identityProviderType = n.getStringValue(); },
    }
}
