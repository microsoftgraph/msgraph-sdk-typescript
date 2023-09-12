import { deserializeIntoEntity } from '../deserializeIntoEntity';
import { type Identity } from './identity';
import { IdentityType } from './identityType';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentity(identity: Identity | undefined = {} as Identity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(identity),
        "type": n => { identity.type = n.getEnumValue<IdentityType>(IdentityType); },
    }
}
