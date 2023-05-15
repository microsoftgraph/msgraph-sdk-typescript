import {deserializeIntoEntity} from './deserializeIntoEntity';
import {IdentityProvider} from './identityProvider';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityProvider(identityProvider: IdentityProvider | undefined = {} as IdentityProvider) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(identityProvider),
        "clientId": n => { identityProvider.clientId = n.getStringValue(); },
        "clientSecret": n => { identityProvider.clientSecret = n.getStringValue(); },
        "name": n => { identityProvider.name = n.getStringValue(); },
        "type": n => { identityProvider.type = n.getStringValue(); },
    }
}
