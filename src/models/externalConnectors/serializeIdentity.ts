import {serializeEntity} from '../serializeEntity';
import {Identity} from './identity';
import {IdentityType} from './identityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentity(identity: Identity | undefined = {} as Identity, writer: SerializationWriter) : void {
        serializeEntity(writer, identity)
        writer.writeEnumValue<IdentityType>("type", identity.type);
}
