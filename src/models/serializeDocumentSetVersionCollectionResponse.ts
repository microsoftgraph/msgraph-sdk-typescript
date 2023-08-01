import type {DocumentSetVersion} from './documentSetVersion';
import type {DocumentSetVersionCollectionResponse} from './documentSetVersionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDocumentSetVersion} from './serializeDocumentSetVersion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDocumentSetVersionCollectionResponse(writer: SerializationWriter, documentSetVersionCollectionResponse: DocumentSetVersionCollectionResponse | undefined = {} as DocumentSetVersionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, documentSetVersionCollectionResponse)
        writer.writeCollectionOfObjectValues<DocumentSetVersion>("value", documentSetVersionCollectionResponse.value, serializeDocumentSetVersion);
}
