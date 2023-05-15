import {deserializeIntoEntity} from './deserializeIntoEntity';
import {IdentityProviderBase} from './identityProviderBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityProviderBase(identityProviderBase: IdentityProviderBase | undefined = {} as IdentityProviderBase) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(identityProviderBase),
        "displayName": n => { identityProviderBase.displayName = n.getStringValue(); },
    }
}
