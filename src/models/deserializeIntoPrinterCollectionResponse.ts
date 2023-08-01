import {createPrinterFromDiscriminatorValue} from './createPrinterFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {Printer} from './printer';
import type {PrinterCollectionResponse} from './printerCollectionResponse';
import {serializePrinter} from './serializePrinter';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterCollectionResponse(printerCollectionResponse: PrinterCollectionResponse | undefined = {} as PrinterCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printerCollectionResponse),
        "value": n => { printerCollectionResponse.value = n.getCollectionOfObjectValues<Printer>(createPrinterFromDiscriminatorValue); },
    }
}
