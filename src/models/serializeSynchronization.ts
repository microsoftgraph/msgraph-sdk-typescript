import { serializeEntity } from './serializeEntity';
import { serializeSynchronizationJob } from './serializeSynchronizationJob';
import { serializeSynchronizationSecretKeyStringValuePair } from './serializeSynchronizationSecretKeyStringValuePair';
import { serializeSynchronizationTemplate } from './serializeSynchronizationTemplate';
import { type Synchronization } from './synchronization';
import { type SynchronizationJob } from './synchronizationJob';
import { type SynchronizationSecretKeyStringValuePair } from './synchronizationSecretKeyStringValuePair';
import { type SynchronizationTemplate } from './synchronizationTemplate';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSynchronization(writer: SerializationWriter, synchronization: Synchronization | undefined = {} as Synchronization) : void {
        serializeEntity(writer, synchronization)
        writer.writeCollectionOfObjectValues<SynchronizationJob>("jobs", synchronization.jobs, serializeSynchronizationJob);
        writer.writeCollectionOfObjectValues<SynchronizationSecretKeyStringValuePair>("secrets", synchronization.secrets, serializeSynchronizationSecretKeyStringValuePair);
        writer.writeCollectionOfObjectValues<SynchronizationTemplate>("templates", synchronization.templates, serializeSynchronizationTemplate);
}
