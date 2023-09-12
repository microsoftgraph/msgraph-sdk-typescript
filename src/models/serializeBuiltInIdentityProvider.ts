import { type BuiltInIdentityProvider } from './builtInIdentityProvider';
import { serializeIdentityProviderBase } from './serializeIdentityProviderBase';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBuiltInIdentityProvider(writer: SerializationWriter, builtInIdentityProvider: BuiltInIdentityProvider | undefined = {} as BuiltInIdentityProvider) : void {
        serializeIdentityProviderBase(writer, builtInIdentityProvider)
        writer.writeStringValue("identityProviderType", builtInIdentityProvider.identityProviderType);
}
