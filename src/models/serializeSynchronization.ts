import {serializeEntity} from './serializeEntity';
import {serializeSynchronizationJob} from './serializeSynchronizationJob';
import {serializeSynchronizationSecretKeyStringValuePair} from './serializeSynchronizationSecretKeyStringValuePair';
import {serializeSynchronizationTemplate} from './serializeSynchronizationTemplate';
import {Synchronization} from './synchronization';
import {SynchronizationJob} from './synchronizationJob';
import {SynchronizationSecretKeyStringValuePair} from './synchronizationSecretKeyStringValuePair';
import {SynchronizationTemplate} from './synchronizationTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronization(writer: SerializationWriter, synchronization: Synchronization | undefined = {} as Synchronization) : void {
        serializeEntity(writer, synchronization)
        writer.writeCollectionOfObjectValues<SynchronizationJob>("jobs", synchronization.jobs, serializeSynchronizationJob);
        writer.writeCollectionOfObjectValues<SynchronizationSecretKeyStringValuePair>("secrets", synchronization.secrets, serializeSynchronizationSecretKeyStringValuePair);
        writer.writeCollectionOfObjectValues<SynchronizationTemplate>("templates", synchronization.templates, serializeSynchronizationTemplate);
}
