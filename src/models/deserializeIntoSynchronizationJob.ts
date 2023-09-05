import { createKeyValuePairFromDiscriminatorValue } from './createKeyValuePairFromDiscriminatorValue';
import { createSynchronizationScheduleFromDiscriminatorValue } from './createSynchronizationScheduleFromDiscriminatorValue';
import { createSynchronizationSchemaFromDiscriminatorValue } from './createSynchronizationSchemaFromDiscriminatorValue';
import { createSynchronizationStatusFromDiscriminatorValue } from './createSynchronizationStatusFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type KeyValuePair } from './keyValuePair';
import { serializeKeyValuePair } from './serializeKeyValuePair';
import { serializeSynchronizationSchedule } from './serializeSynchronizationSchedule';
import { serializeSynchronizationSchema } from './serializeSynchronizationSchema';
import { serializeSynchronizationStatus } from './serializeSynchronizationStatus';
import { type SynchronizationJob } from './synchronizationJob';
import { type SynchronizationSchedule } from './synchronizationSchedule';
import { type SynchronizationSchema } from './synchronizationSchema';
import { type SynchronizationStatus } from './synchronizationStatus';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationJob(synchronizationJob: SynchronizationJob | undefined = {} as SynchronizationJob) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(synchronizationJob),
        "schedule": n => { synchronizationJob.schedule = n.getObjectValue<SynchronizationSchedule>(createSynchronizationScheduleFromDiscriminatorValue); },
        "schema": n => { synchronizationJob.schema = n.getObjectValue<SynchronizationSchema>(createSynchronizationSchemaFromDiscriminatorValue); },
        "status": n => { synchronizationJob.status = n.getObjectValue<SynchronizationStatus>(createSynchronizationStatusFromDiscriminatorValue); },
        "synchronizationJobSettings": n => { synchronizationJob.synchronizationJobSettings = n.getCollectionOfObjectValues<KeyValuePair>(createKeyValuePairFromDiscriminatorValue); },
        "templateId": n => { synchronizationJob.templateId = n.getStringValue(); },
    }
}
