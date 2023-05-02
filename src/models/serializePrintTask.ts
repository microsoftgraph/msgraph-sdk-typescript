import {PrintTask} from './printTask';
import {PrintTaskDefinition} from './printTaskDefinition';
import {PrintTaskStatus} from './printTaskStatus';
import {PrintTaskTrigger} from './printTaskTrigger';
import {serializeEntity} from './serializeEntity';
import {serializePrintTaskDefinition} from './serializePrintTaskDefinition';
import {serializePrintTaskStatus} from './serializePrintTaskStatus';
import {serializePrintTaskTrigger} from './serializePrintTaskTrigger';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintTask(writer: SerializationWriter, printTask: PrintTask | undefined = {} as PrintTask) : void {
        serializeEntity(writer, printTask)
        writer.writeObjectValue<PrintTaskDefinition>("definition", printTask.definition, serializePrintTaskDefinition);
        writer.writeStringValue("parentUrl", printTask.parentUrl);
        writer.writeObjectValue<PrintTaskStatus>("status", printTask.status, serializePrintTaskStatus);
        writer.writeObjectValue<PrintTaskTrigger>("trigger", printTask.trigger, serializePrintTaskTrigger);
}
