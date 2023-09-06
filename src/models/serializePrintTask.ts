import { type PrintTask } from './printTask';
import { type PrintTaskDefinition } from './printTaskDefinition';
import { type PrintTaskStatus } from './printTaskStatus';
import { type PrintTaskTrigger } from './printTaskTrigger';
import { serializeEntity } from './serializeEntity';
import { serializePrintTaskDefinition } from './serializePrintTaskDefinition';
import { serializePrintTaskStatus } from './serializePrintTaskStatus';
import { serializePrintTaskTrigger } from './serializePrintTaskTrigger';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePrintTask(writer: SerializationWriter, printTask: PrintTask | undefined = {} as PrintTask) : void {
        serializeEntity(writer, printTask)
        writer.writeObjectValue<PrintTaskDefinition>("definition", printTask.definition, serializePrintTaskDefinition);
        writer.writeStringValue("parentUrl", printTask.parentUrl);
        writer.writeObjectValue<PrintTaskStatus>("status", printTask.status, serializePrintTaskStatus);
        writer.writeObjectValue<PrintTaskTrigger>("trigger", printTask.trigger, serializePrintTaskTrigger);
}
