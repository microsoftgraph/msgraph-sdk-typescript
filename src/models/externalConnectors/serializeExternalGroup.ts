import { serializeEntity } from '../serializeEntity';
import { type ExternalGroup } from './externalGroup';
import { type Identity } from './identity';
import { serializeIdentity } from './serializeIdentity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeExternalGroup(writer: SerializationWriter, externalGroup: ExternalGroup | undefined = {} as ExternalGroup) : void {
        serializeEntity(writer, externalGroup)
        writer.writeStringValue("description", externalGroup.description);
        writer.writeStringValue("displayName", externalGroup.displayName);
        writer.writeCollectionOfObjectValues<Identity>("members", externalGroup.members, serializeIdentity);
}
