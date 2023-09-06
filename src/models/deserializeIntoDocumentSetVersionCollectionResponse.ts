import { createDocumentSetVersionFromDiscriminatorValue } from './createDocumentSetVersionFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type DocumentSetVersion } from './documentSetVersion';
import { type DocumentSetVersionCollectionResponse } from './documentSetVersionCollectionResponse';
import { serializeDocumentSetVersion } from './serializeDocumentSetVersion';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDocumentSetVersionCollectionResponse(documentSetVersionCollectionResponse: DocumentSetVersionCollectionResponse | undefined = {} as DocumentSetVersionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(documentSetVersionCollectionResponse),
        "value": n => { documentSetVersionCollectionResponse.value = n.getCollectionOfObjectValues<DocumentSetVersion>(createDocumentSetVersionFromDiscriminatorValue); },
    }
}
