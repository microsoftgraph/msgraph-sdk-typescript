import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type IdentityProviderBase } from './identityProviderBase';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityProviderBase(identityProviderBase: IdentityProviderBase | undefined = {} as IdentityProviderBase) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(identityProviderBase),
        "displayName": n => { identityProviderBase.displayName = n.getStringValue(); },
    }
}
