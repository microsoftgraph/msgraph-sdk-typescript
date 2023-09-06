import { createPrintServiceFromDiscriminatorValue } from './createPrintServiceFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type PrintService } from './printService';
import { type PrintServiceCollectionResponse } from './printServiceCollectionResponse';
import { serializePrintService } from './serializePrintService';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintServiceCollectionResponse(printServiceCollectionResponse: PrintServiceCollectionResponse | undefined = {} as PrintServiceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printServiceCollectionResponse),
        "value": n => { printServiceCollectionResponse.value = n.getCollectionOfObjectValues<PrintService>(createPrintServiceFromDiscriminatorValue); },
    }
}
