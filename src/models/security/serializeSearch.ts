import {IdentitySet} from '../identitySet';
import {serializeEntity} from '../serializeEntity';
import {serializeIdentitySet} from '../serializeIdentitySet';
import {Search} from './search';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
