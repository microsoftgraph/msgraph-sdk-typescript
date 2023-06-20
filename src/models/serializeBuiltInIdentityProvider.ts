import {BuiltInIdentityProvider} from './builtInIdentityProvider';
import {serializeIdentityProviderBase} from './serializeIdentityProviderBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBuiltInIdentityProvider(builtInIdentityProvider: BuiltInIdentityProvider | undefined = {} as BuiltInIdentityProvider, writer: SerializationWriter) : void {
        serializeIdentityProviderBase(writer, builtInIdentityProvider)
        writer.writeStringValue("identityProviderType", builtInIdentityProvider.identityProviderType);
}
