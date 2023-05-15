import {createPrintTaskTriggerFromDiscriminatorValue} from './createPrintTaskTriggerFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {PrintTaskTrigger} from './printTaskTrigger';
import {PrintTaskTriggerCollectionResponse} from './printTaskTriggerCollectionResponse';
import {serializePrintTaskTrigger} from './serializePrintTaskTrigger';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintTaskTriggerCollectionResponse(printTaskTriggerCollectionResponse: PrintTaskTriggerCollectionResponse | undefined = {} as PrintTaskTriggerCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printTaskTriggerCollectionResponse),
        "value": n => { printTaskTriggerCollectionResponse.value = n.getCollectionOfObjectValues<PrintTaskTrigger>(createPrintTaskTriggerFromDiscriminatorValue); },
    }
}
