import {BuiltInIdentityProvider} from './builtInIdentityProvider';
import {deserializeIntoIdentityProviderBase} from './deserializeIntoIdentityProviderBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBuiltInIdentityProvider(builtInIdentityProvider: BuiltInIdentityProvider | undefined = {} as BuiltInIdentityProvider) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentityProviderBase(builtInIdentityProvider),
        "identityProviderType": n => { builtInIdentityProvider.identityProviderType = n.getStringValue(); },
    }
}
