import { createPrinterShareFromDiscriminatorValue } from './createPrinterShareFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type PrinterShare } from './printerShare';
import { type PrinterShareCollectionResponse } from './printerShareCollectionResponse';
import { serializePrinterShare } from './serializePrinterShare';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterShareCollectionResponse(printerShareCollectionResponse: PrinterShareCollectionResponse | undefined = {} as PrinterShareCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printerShareCollectionResponse),
        "value": n => { printerShareCollectionResponse.value = n.getCollectionOfObjectValues<PrinterShare>(createPrinterShareFromDiscriminatorValue); },
    }
}
