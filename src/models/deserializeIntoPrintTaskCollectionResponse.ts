import { createPrintTaskFromDiscriminatorValue } from './createPrintTaskFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type PrintTask } from './printTask';
import { type PrintTaskCollectionResponse } from './printTaskCollectionResponse';
import { serializePrintTask } from './serializePrintTask';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintTaskCollectionResponse(printTaskCollectionResponse: PrintTaskCollectionResponse | undefined = {} as PrintTaskCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printTaskCollectionResponse),
        "value": n => { printTaskCollectionResponse.value = n.getCollectionOfObjectValues<PrintTask>(createPrintTaskFromDiscriminatorValue); },
    }
}
