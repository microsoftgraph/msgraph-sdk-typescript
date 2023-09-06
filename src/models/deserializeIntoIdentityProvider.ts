import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type IdentityProvider } from './identityProvider';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityProvider(identityProvider: IdentityProvider | undefined = {} as IdentityProvider) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(identityProvider),
        "clientId": n => { identityProvider.clientId = n.getStringValue(); },
        "clientSecret": n => { identityProvider.clientSecret = n.getStringValue(); },
        "name": n => { identityProvider.name = n.getStringValue(); },
        "type": n => { identityProvider.type = n.getStringValue(); },
    }
}
