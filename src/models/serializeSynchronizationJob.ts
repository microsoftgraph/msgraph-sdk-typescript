import {KeyValuePair} from './keyValuePair';
import {serializeEntity} from './serializeEntity';
import {serializeKeyValuePair} from './serializeKeyValuePair';
import {serializeSynchronizationSchedule} from './serializeSynchronizationSchedule';
import {serializeSynchronizationSchema} from './serializeSynchronizationSchema';
import {serializeSynchronizationStatus} from './serializeSynchronizationStatus';
import {SynchronizationJob} from './synchronizationJob';
import {SynchronizationSchedule} from './synchronizationSchedule';
import {SynchronizationSchema} from './synchronizationSchema';
import {SynchronizationStatus} from './synchronizationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronizationJob(writer: SerializationWriter, synchronizationJob: SynchronizationJob | undefined = {} as SynchronizationJob) : void {
        serializeEntity(writer, synchronizationJob)
        writer.writeObjectValue<SynchronizationSchedule>("schedule", synchronizationJob.schedule, serializeSynchronizationSchedule);
        writer.writeObjectValue<SynchronizationSchema>("schema", synchronizationJob.schema, serializeSynchronizationSchema);
        writer.writeObjectValue<SynchronizationStatus>("status", synchronizationJob.status, serializeSynchronizationStatus);
        writer.writeCollectionOfObjectValues<KeyValuePair>("synchronizationJobSettings", synchronizationJob.synchronizationJobSettings, serializeKeyValuePair);
        writer.writeStringValue("templateId", synchronizationJob.templateId);
}
