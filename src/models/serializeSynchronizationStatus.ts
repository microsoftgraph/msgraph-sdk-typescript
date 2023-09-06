import { serializeStringKeyLongValuePair } from './serializeStringKeyLongValuePair';
import { serializeSynchronizationProgress } from './serializeSynchronizationProgress';
import { serializeSynchronizationQuarantine } from './serializeSynchronizationQuarantine';
import { serializeSynchronizationTaskExecution } from './serializeSynchronizationTaskExecution';
import { type StringKeyLongValuePair } from './stringKeyLongValuePair';
import { type SynchronizationProgress } from './synchronizationProgress';
import { type SynchronizationQuarantine } from './synchronizationQuarantine';
import { type SynchronizationStatus } from './synchronizationStatus';
import { SynchronizationStatusCode } from './synchronizationStatusCode';
import { type SynchronizationTaskExecution } from './synchronizationTaskExecution';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

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
