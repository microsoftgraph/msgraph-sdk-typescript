import { serializeEntity } from '../serializeEntity';
import { type Identity } from './identity';
import { IdentityType } from './identityType';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIdentity(writer: SerializationWriter, identity: Identity | undefined = {} as Identity) : void {
        serializeEntity(writer, identity)
        writer.writeEnumValue<IdentityType>("type", identity.type);
}
