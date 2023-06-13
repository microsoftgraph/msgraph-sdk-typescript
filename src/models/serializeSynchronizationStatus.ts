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

export function serializeSynchronizationStatus(writer: SerializationWriter, synchronizationStatus: SynchronizationStatus | undefined = {} as SynchronizationStatus) : void {
        writer.writeEnumValue<SynchronizationStatusCode>("code", synchronizationStatus.code);
        writer.writeNumberValue("countSuccessiveCompleteFailures", synchronizationStatus.countSuccessiveCompleteFailures);
        writer.writeBooleanValue("escrowsPruned", synchronizationStatus.escrowsPruned);
        writer.writeObjectValue<SynchronizationTaskExecution>("lastExecution", synchronizationStatus.lastExecution, serializeSynchronizationTaskExecution);
        writer.writeObjectValue<SynchronizationTaskExecution>("lastSuccessfulExecution", synchronizationStatus.lastSuccessfulExecution, serializeSynchronizationTaskExecution);
        writer.writeObjectValue<SynchronizationTaskExecution>("lastSuccessfulExecutionWithExports", synchronizationStatus.lastSuccessfulExecutionWithExports, serializeSynchronizationTaskExecution);
        writer.writeStringValue("@odata.type", synchronizationStatus.odataType);
        writer.writeCollectionOfObjectValues<SynchronizationProgress>("progress", synchronizationStatus.progress, serializeSynchronizationProgress);
        writer.writeObjectValue<SynchronizationQuarantine>("quarantine", synchronizationStatus.quarantine, serializeSynchronizationQuarantine);
        writer.writeDateValue("steadyStateFirstAchievedTime", synchronizationStatus.steadyStateFirstAchievedTime);
        writer.writeDateValue("steadyStateLastAchievedTime", synchronizationStatus.steadyStateLastAchievedTime);
        writer.writeCollectionOfObjectValues<StringKeyLongValuePair>("synchronizedEntryCountByType", synchronizationStatus.synchronizedEntryCountByType, serializeStringKeyLongValuePair);
        writer.writeStringValue("troubleshootingUrl", synchronizationStatus.troubleshootingUrl);
        writer.writeAdditionalData(synchronizationStatus.additionalData);
}
