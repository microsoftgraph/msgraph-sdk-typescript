import {serializeEntity} from '../serializeEntity';
import {Identity} from './identity';
import {IdentityType} from './identityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentity(writer: SerializationWriter, identity: Identity | undefined = {} as Identity) : void {
        serializeEntity(writer, identity)
        writer.writeEnumValue<IdentityType>("type", identity.type);
}
