import {createDocumentSetVersionFromDiscriminatorValue} from './createDocumentSetVersionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {DocumentSetVersion} from './documentSetVersion';
import {DocumentSetVersionCollectionResponse} from './documentSetVersionCollectionResponse';
import {serializeDocumentSetVersion} from './serializeDocumentSetVersion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDocumentSetVersionCollectionResponse(documentSetVersionCollectionResponse: DocumentSetVersionCollectionResponse | undefined = {} as DocumentSetVersionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(documentSetVersionCollectionResponse),
        "value": n => { documentSetVersionCollectionResponse.value = n.getCollectionOfObjectValues<DocumentSetVersion>(createDocumentSetVersionFromDiscriminatorValue); },
    }
}
