import {serializeEntity} from '../serializeEntity';
import {ExternalGroup} from './externalGroup';
import {Identity} from './identity';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalGroup(writer: SerializationWriter, externalGroup: ExternalGroup | undefined = {} as ExternalGroup) : void {
        serializeEntity(writer, externalGroup)
        writer.writeStringValue("description", externalGroup.description);
        writer.writeStringValue("displayName", externalGroup.displayName);
        writer.writeCollectionOfObjectValues<Identity>("members", externalGroup.members, serializeIdentity);
}
