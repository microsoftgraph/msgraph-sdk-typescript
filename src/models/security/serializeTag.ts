import { type IdentitySet } from '../identitySet';
import { serializeEntity } from '../serializeEntity';
import { serializeIdentitySet } from '../serializeIdentitySet';
import { type Tag } from './tag';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTag(writer: SerializationWriter, tag: Tag | undefined = {} as Tag) : void {
        serializeEntity(writer, tag)
        writer.writeObjectValue<IdentitySet>("createdBy", tag.createdBy, serializeIdentitySet);
        writer.writeStringValue("description", tag.description);
        writer.writeStringValue("displayName", tag.displayName);
        writer.writeDateValue("lastModifiedDateTime", tag.lastModifiedDateTime);
}
