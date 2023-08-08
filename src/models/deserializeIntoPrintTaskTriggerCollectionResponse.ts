import {createPrintTaskTriggerFromDiscriminatorValue} from './createPrintTaskTriggerFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {PrintTaskTrigger} from './printTaskTrigger';
import type {PrintTaskTriggerCollectionResponse} from './printTaskTriggerCollectionResponse';
import {serializePrintTaskTrigger} from './serializePrintTaskTrigger';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintTaskTriggerCollectionResponse(printTaskTriggerCollectionResponse: PrintTaskTriggerCollectionResponse | undefined = {} as PrintTaskTriggerCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printTaskTriggerCollectionResponse),
        "value": n => { printTaskTriggerCollectionResponse.value = n.getCollectionOfObjectValues<PrintTaskTrigger>(createPrintTaskTriggerFromDiscriminatorValue); },
    }
}
