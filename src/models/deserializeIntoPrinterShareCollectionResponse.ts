import {createPrinterShareFromDiscriminatorValue} from './createPrinterShareFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {PrinterShare} from './printerShare';
import {PrinterShareCollectionResponse} from './printerShareCollectionResponse';
import {serializePrinterShare} from './serializePrinterShare';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterShareCollectionResponse(printerShareCollectionResponse: PrinterShareCollectionResponse | undefined = {} as PrinterShareCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printerShareCollectionResponse),
        "value": n => { printerShareCollectionResponse.value = n.getCollectionOfObjectValues<PrinterShare>(createPrinterShareFromDiscriminatorValue); },
    }
}
