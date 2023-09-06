import { type DocumentSetVersion } from './documentSetVersion';
import { type DocumentSetVersionItem } from './documentSetVersionItem';
import { type IdentitySet } from './identitySet';
import { serializeDocumentSetVersionItem } from './serializeDocumentSetVersionItem';
import { serializeIdentitySet } from './serializeIdentitySet';
import { serializeListItemVersion } from './serializeListItemVersion';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDocumentSetVersion(writer: SerializationWriter, documentSetVersion: DocumentSetVersion | undefined = {} as DocumentSetVersion) : void {
        serializeListItemVersion(writer, documentSetVersion)
        writer.writeStringValue("comment", documentSetVersion.comment);
        writer.writeObjectValue<IdentitySet>("createdBy", documentSetVersion.createdBy, serializeIdentitySet);
        writer.writeDateValue("createdDateTime", documentSetVersion.createdDateTime);
        writer.writeCollectionOfObjectValues<DocumentSetVersionItem>("items", documentSetVersion.items, serializeDocumentSetVersionItem);
        writer.writeBooleanValue("shouldCaptureMinorVersion", documentSetVersion.shouldCaptureMinorVersion);
}
