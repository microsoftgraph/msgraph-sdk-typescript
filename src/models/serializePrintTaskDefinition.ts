import { type AppIdentity } from './appIdentity';
import { type PrintTask } from './printTask';
import { type PrintTaskDefinition } from './printTaskDefinition';
import { serializeAppIdentity } from './serializeAppIdentity';
import { serializeEntity } from './serializeEntity';
import { serializePrintTask } from './serializePrintTask';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePrintTaskDefinition(writer: SerializationWriter, printTaskDefinition: PrintTaskDefinition | undefined = {} as PrintTaskDefinition) : void {
        serializeEntity(writer, printTaskDefinition)
        writer.writeObjectValue<AppIdentity>("createdBy", printTaskDefinition.createdBy, serializeAppIdentity);
        writer.writeStringValue("displayName", printTaskDefinition.displayName);
        writer.writeCollectionOfObjectValues<PrintTask>("tasks", printTaskDefinition.tasks, serializePrintTask);
}
