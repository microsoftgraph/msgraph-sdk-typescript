import {createKeyValuePairFromDiscriminatorValue} from './createKeyValuePairFromDiscriminatorValue';
import {createSynchronizationScheduleFromDiscriminatorValue} from './createSynchronizationScheduleFromDiscriminatorValue';
import {createSynchronizationSchemaFromDiscriminatorValue} from './createSynchronizationSchemaFromDiscriminatorValue';
import {createSynchronizationStatusFromDiscriminatorValue} from './createSynchronizationStatusFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {KeyValuePair} from './keyValuePair';
import {serializeKeyValuePair} from './serializeKeyValuePair';
import {serializeSynchronizationSchedule} from './serializeSynchronizationSchedule';
import {serializeSynchronizationSchema} from './serializeSynchronizationSchema';
import {serializeSynchronizationStatus} from './serializeSynchronizationStatus';
import {SynchronizationJob} from './synchronizationJob';
import {SynchronizationSchedule} from './synchronizationSchedule';
import {SynchronizationSchema} from './synchronizationSchema';
import {SynchronizationStatus} from './synchronizationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
