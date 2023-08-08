import {createPrintOperationFromDiscriminatorValue} from './createPrintOperationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {PrintOperation} from './printOperation';
import type {PrintOperationCollectionResponse} from './printOperationCollectionResponse';
import {serializePrintOperation} from './serializePrintOperation';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintOperationCollectionResponse(printOperationCollectionResponse: PrintOperationCollectionResponse | undefined = {} as PrintOperationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printOperationCollectionResponse),
        "value": n => { printOperationCollectionResponse.value = n.getCollectionOfObjectValues<PrintOperation>(createPrintOperationFromDiscriminatorValue); },
    }
}
