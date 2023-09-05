import { type BuiltInIdentityProvider } from './builtInIdentityProvider';
import { deserializeIntoIdentityProviderBase } from './deserializeIntoIdentityProviderBase';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBuiltInIdentityProvider(builtInIdentityProvider: BuiltInIdentityProvider | undefined = {} as BuiltInIdentityProvider) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentityProviderBase(builtInIdentityProvider),
        "identityProviderType": n => { builtInIdentityProvider.identityProviderType = n.getStringValue(); },
    }
}
