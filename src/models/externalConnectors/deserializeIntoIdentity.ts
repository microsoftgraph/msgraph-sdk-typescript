import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {Identity} from './identity';
import {IdentityType} from './identityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentity(identity: Identity | undefined = {} as Identity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(identity),
        "type": n => { identity.type = n.getEnumValue<IdentityType>(IdentityType); },
    }
}
