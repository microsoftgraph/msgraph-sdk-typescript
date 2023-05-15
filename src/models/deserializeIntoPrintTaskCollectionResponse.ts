import {createPrintTaskFromDiscriminatorValue} from './createPrintTaskFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {PrintTask} from './printTask';
import {PrintTaskCollectionResponse} from './printTaskCollectionResponse';
import {serializePrintTask} from './serializePrintTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintTaskCollectionResponse(printTaskCollectionResponse: PrintTaskCollectionResponse | undefined = {} as PrintTaskCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printTaskCollectionResponse),
        "value": n => { printTaskCollectionResponse.value = n.getCollectionOfObjectValues<PrintTask>(createPrintTaskFromDiscriminatorValue); },
    }
}
