import {serializeSynchronizationError} from './serializeSynchronizationError';
import {SynchronizationError} from './synchronizationError';
import {SynchronizationTaskExecution} from './synchronizationTaskExecution';
import {SynchronizationTaskExecutionResult} from './synchronizationTaskExecutionResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronizationTaskExecution(writer: SerializationWriter, synchronizationTaskExecution: SynchronizationTaskExecution | undefined = {} as SynchronizationTaskExecution) : void {
        writer.writeStringValue("activityIdentifier", synchronizationTaskExecution.activityIdentifier);
        writer.writeNumberValue("countEntitled", synchronizationTaskExecution.countEntitled);
        writer.writeNumberValue("countEntitledForProvisioning", synchronizationTaskExecution.countEntitledForProvisioning);
        writer.writeNumberValue("countEscrowed", synchronizationTaskExecution.countEscrowed);
        writer.writeNumberValue("countEscrowedRaw", synchronizationTaskExecution.countEscrowedRaw);
        writer.writeNumberValue("countExported", synchronizationTaskExecution.countExported);
        writer.writeNumberValue("countExports", synchronizationTaskExecution.countExports);
        writer.writeNumberValue("countImported", synchronizationTaskExecution.countImported);
        writer.writeNumberValue("countImportedDeltas", synchronizationTaskExecution.countImportedDeltas);
        writer.writeNumberValue("countImportedReferenceDeltas", synchronizationTaskExecution.countImportedReferenceDeltas);
        writer.writeObjectValue<SynchronizationError>("error", synchronizationTaskExecution.errorEscaped, serializeSynchronizationError);
        writer.writeStringValue("@odata.type", synchronizationTaskExecution.odataType);
        writer.writeEnumValue<SynchronizationTaskExecutionResult>("state", synchronizationTaskExecution.state);
        writer.writeDateValue("timeBegan", synchronizationTaskExecution.timeBegan);
        writer.writeDateValue("timeEnded", synchronizationTaskExecution.timeEnded);
        writer.writeAdditionalData(synchronizationTaskExecution.additionalData);
}
