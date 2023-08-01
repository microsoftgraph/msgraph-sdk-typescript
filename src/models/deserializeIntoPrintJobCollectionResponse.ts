import {createPrintJobFromDiscriminatorValue} from './createPrintJobFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {PrintJob} from './printJob';
import type {PrintJobCollectionResponse} from './printJobCollectionResponse';
import {serializePrintJob} from './serializePrintJob';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintJobCollectionResponse(printJobCollectionResponse: PrintJobCollectionResponse | undefined = {} as PrintJobCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printJobCollectionResponse),
        "value": n => { printJobCollectionResponse.value = n.getCollectionOfObjectValues<PrintJob>(createPrintJobFromDiscriminatorValue); },
    }
}
