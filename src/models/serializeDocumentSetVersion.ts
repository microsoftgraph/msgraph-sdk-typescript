import {DocumentSetVersion} from './documentSetVersion';
import {DocumentSetVersionItem} from './documentSetVersionItem';
import {IdentitySet} from './identitySet';
import {serializeDocumentSetVersionItem} from './serializeDocumentSetVersionItem';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeListItemVersion} from './serializeListItemVersion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDocumentSetVersion(writer: SerializationWriter, documentSetVersion: DocumentSetVersion | undefined = {} as DocumentSetVersion) : void {
        serializeListItemVersion(writer, documentSetVersion)
        writer.writeStringValue("comment", documentSetVersion.comment);
        writer.writeObjectValue<IdentitySet>("createdBy", documentSetVersion.createdBy, serializeIdentitySet);
        writer.writeDateValue("createdDateTime", documentSetVersion.createdDateTime);
        writer.writeCollectionOfObjectValues<DocumentSetVersionItem>("items", documentSetVersion.items, serializeDocumentSetVersionItem);
        writer.writeBooleanValue("shouldCaptureMinorVersion", documentSetVersion.shouldCaptureMinorVersion);
}
