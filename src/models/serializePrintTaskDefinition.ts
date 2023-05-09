import {AppIdentity} from './appIdentity';
import {PrintTask} from './printTask';
import {PrintTaskDefinition} from './printTaskDefinition';
import {serializeAppIdentity} from './serializeAppIdentity';
import {serializeEntity} from './serializeEntity';
import {serializePrintTask} from './serializePrintTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintTaskDefinition(writer: SerializationWriter, printTaskDefinition: PrintTaskDefinition | undefined = {} as PrintTaskDefinition) : void {
        serializeEntity(writer, printTaskDefinition)
        writer.writeObjectValue<AppIdentity>("createdBy", printTaskDefinition.createdBy, serializeAppIdentity);
        writer.writeStringValue("displayName", printTaskDefinition.displayName);
        writer.writeCollectionOfObjectValues<PrintTask>("tasks", printTaskDefinition.tasks, serializePrintTask);
}
