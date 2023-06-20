import {DocumentSetVersion} from './documentSetVersion';
import {DocumentSetVersionCollectionResponse} from './documentSetVersionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDocumentSetVersion} from './serializeDocumentSetVersion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDocumentSetVersionCollectionResponse(documentSetVersionCollectionResponse: DocumentSetVersionCollectionResponse | undefined = {} as DocumentSetVersionCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, documentSetVersionCollectionResponse)
        writer.writeCollectionOfObjectValues<DocumentSetVersion>("value", documentSetVersionCollectionResponse.value, serializeDocumentSetVersion);
}
