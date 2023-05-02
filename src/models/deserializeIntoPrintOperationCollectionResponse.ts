import {createPrintOperationFromDiscriminatorValue} from './createPrintOperationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {PrintOperation} from './printOperation';
import {PrintOperationCollectionResponse} from './printOperationCollectionResponse';
import {serializePrintOperation} from './serializePrintOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintOperationCollectionResponse(printOperationCollectionResponse: PrintOperationCollectionResponse | undefined = {} as PrintOperationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printOperationCollectionResponse),
        "value": n => { printOperationCollectionResponse.value = n.getCollectionOfObjectValues<PrintOperation>(createPrintOperationFromDiscriminatorValue); },
    }
}
