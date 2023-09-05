import { type IdentitySet } from '../identitySet';
import { serializeEntity } from '../serializeEntity';
import { serializeIdentitySet } from '../serializeIdentitySet';
import { type Search } from './search';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSearch(writer: SerializationWriter, search: Search | undefined = {} as Search) : void {
        serializeEntity(writer, search)
        writer.writeStringValue("contentQuery", search.contentQuery);
        writer.writeObjectValue<IdentitySet>("createdBy", search.createdBy, serializeIdentitySet);
        writer.writeDateValue("createdDateTime", search.createdDateTime);
        writer.writeStringValue("description", search.description);
        writer.writeStringValue("displayName", search.displayName);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", search.lastModifiedBy, serializeIdentitySet);
        writer.writeDateValue("lastModifiedDateTime", search.lastModifiedDateTime);
}
