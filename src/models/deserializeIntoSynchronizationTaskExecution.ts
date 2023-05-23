import {createSynchronizationErrorFromDiscriminatorValue} from './createSynchronizationErrorFromDiscriminatorValue';
import {serializeSynchronizationError} from './serializeSynchronizationError';
import {SynchronizationError} from './synchronizationError';
import {SynchronizationTaskExecution} from './synchronizationTaskExecution';
import {SynchronizationTaskExecutionResult} from './synchronizationTaskExecutionResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationTaskExecution(synchronizationTaskExecution: SynchronizationTaskExecution | undefined = {} as SynchronizationTaskExecution) : Record<string, (node: ParseNode) => void> {
    return {
        "activityIdentifier": n => { synchronizationTaskExecution.activityIdentifier = n.getStringValue(); },
        "countEntitled": n => { synchronizationTaskExecution.countEntitled = n.getNumberValue(); },
        "countEntitledForProvisioning": n => { synchronizationTaskExecution.countEntitledForProvisioning = n.getNumberValue(); },
        "countEscrowed": n => { synchronizationTaskExecution.countEscrowed = n.getNumberValue(); },
        "countEscrowedRaw": n => { synchronizationTaskExecution.countEscrowedRaw = n.getNumberValue(); },
        "countExported": n => { synchronizationTaskExecution.countExported = n.getNumberValue(); },
        "countExports": n => { synchronizationTaskExecution.countExports = n.getNumberValue(); },
        "countImported": n => { synchronizationTaskExecution.countImported = n.getNumberValue(); },
        "countImportedDeltas": n => { synchronizationTaskExecution.countImportedDeltas = n.getNumberValue(); },
        "countImportedReferenceDeltas": n => { synchronizationTaskExecution.countImportedReferenceDeltas = n.getNumberValue(); },
        "error": n => { synchronizationTaskExecution.errorEscaped = n.getObjectValue<SynchronizationError>(createSynchronizationErrorFromDiscriminatorValue); },
        "@odata.type": n => { synchronizationTaskExecution.odataType = n.getStringValue(); },
        "state": n => { synchronizationTaskExecution.state = n.getEnumValue<SynchronizationTaskExecutionResult>(SynchronizationTaskExecutionResult); },
        "timeBegan": n => { synchronizationTaskExecution.timeBegan = n.getDateValue(); },
        "timeEnded": n => { synchronizationTaskExecution.timeEnded = n.getDateValue(); },
    }
}
