import {createPrintDocumentFromDiscriminatorValue} from './createPrintDocumentFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {PrintDocument} from './printDocument';
import type {PrintDocumentCollectionResponse} from './printDocumentCollectionResponse';
import {serializePrintDocument} from './serializePrintDocument';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintDocumentCollectionResponse(printDocumentCollectionResponse: PrintDocumentCollectionResponse | undefined = {} as PrintDocumentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printDocumentCollectionResponse),
        "value": n => { printDocumentCollectionResponse.value = n.getCollectionOfObjectValues<PrintDocument>(createPrintDocumentFromDiscriminatorValue); },
    }
}
