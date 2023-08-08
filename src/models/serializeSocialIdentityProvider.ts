import {serializeIdentityProviderBase} from './serializeIdentityProviderBase';
import type {SocialIdentityProvider} from './socialIdentityProvider';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSocialIdentityProvider(writer: SerializationWriter, socialIdentityProvider: SocialIdentityProvider | undefined = {} as SocialIdentityProvider) : void {
        serializeIdentityProviderBase(writer, socialIdentityProvider)
        writer.writeStringValue("clientId", socialIdentityProvider.clientId);
        writer.writeStringValue("clientSecret", socialIdentityProvider.clientSecret);
        writer.writeStringValue("identityProviderType", socialIdentityProvider.identityProviderType);
}
