import {createStringKeyLongValuePairFromDiscriminatorValue} from './createStringKeyLongValuePairFromDiscriminatorValue';
import {createSynchronizationProgressFromDiscriminatorValue} from './createSynchronizationProgressFromDiscriminatorValue';
import {createSynchronizationQuarantineFromDiscriminatorValue} from './createSynchronizationQuarantineFromDiscriminatorValue';
import {createSynchronizationTaskExecutionFromDiscriminatorValue} from './createSynchronizationTaskExecutionFromDiscriminatorValue';
import {serializeStringKeyLongValuePair} from './serializeStringKeyLongValuePair';
import {serializeSynchronizationProgress} from './serializeSynchronizationProgress';
import {serializeSynchronizationQuarantine} from './serializeSynchronizationQuarantine';
import {serializeSynchronizationTaskExecution} from './serializeSynchronizationTaskExecution';
import {StringKeyLongValuePair} from './stringKeyLongValuePair';
import {SynchronizationProgress} from './synchronizationProgress';
import {SynchronizationQuarantine} from './synchronizationQuarantine';
import {SynchronizationStatus} from './synchronizationStatus';
import {SynchronizationStatusCode} from './synchronizationStatusCode';
import {SynchronizationTaskExecution} from './synchronizationTaskExecution';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationStatus(synchronizationStatus: SynchronizationStatus | undefined = {} as SynchronizationStatus) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { synchronizationStatus.code = n.getEnumValue<SynchronizationStatusCode>(SynchronizationStatusCode); },
        "countSuccessiveCompleteFailures": n => { synchronizationStatus.countSuccessiveCompleteFailures = n.getNumberValue(); },
        "escrowsPruned": n => { synchronizationStatus.escrowsPruned = n.getBooleanValue(); },
        "lastExecution": n => { synchronizationStatus.lastExecution = n.getObjectValue<SynchronizationTaskExecution>(createSynchronizationTaskExecutionFromDiscriminatorValue); },
        "lastSuccessfulExecution": n => { synchronizationStatus.lastSuccessfulExecution = n.getObjectValue<SynchronizationTaskExecution>(createSynchronizationTaskExecutionFromDiscriminatorValue); },
        "lastSuccessfulExecutionWithExports": n => { synchronizationStatus.lastSuccessfulExecutionWithExports = n.getObjectValue<SynchronizationTaskExecution>(createSynchronizationTaskExecutionFromDiscriminatorValue); },
        "@odata.type": n => { synchronizationStatus.odataType = n.getStringValue(); },
        "progress": n => { synchronizationStatus.progress = n.getCollectionOfObjectValues<SynchronizationProgress>(createSynchronizationProgressFromDiscriminatorValue); },
        "quarantine": n => { synchronizationStatus.quarantine = n.getObjectValue<SynchronizationQuarantine>(createSynchronizationQuarantineFromDiscriminatorValue); },
        "steadyStateFirstAchievedTime": n => { synchronizationStatus.steadyStateFirstAchievedTime = n.getDateValue(); },
        "steadyStateLastAchievedTime": n => { synchronizationStatus.steadyStateLastAchievedTime = n.getDateValue(); },
        "synchronizedEntryCountByType": n => { synchronizationStatus.synchronizedEntryCountByType = n.getCollectionOfObjectValues<StringKeyLongValuePair>(createStringKeyLongValuePairFromDiscriminatorValue); },
        "troubleshootingUrl": n => { synchronizationStatus.troubleshootingUrl = n.getStringValue(); },
    }
}
