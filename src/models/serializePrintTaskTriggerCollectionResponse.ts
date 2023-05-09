import {PrintTaskTrigger} from './printTaskTrigger';
import {PrintTaskTriggerCollectionResponse} from './printTaskTriggerCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrintTaskTrigger} from './serializePrintTaskTrigger';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintTaskTriggerCollectionResponse(writer: SerializationWriter, printTaskTriggerCollectionResponse: PrintTaskTriggerCollectionResponse | undefined = {} as PrintTaskTriggerCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printTaskTriggerCollectionResponse)
        writer.writeCollectionOfObjectValues<PrintTaskTrigger>("value", printTaskTriggerCollectionResponse.value, serializePrintTaskTrigger);
}
