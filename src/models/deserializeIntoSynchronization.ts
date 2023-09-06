import { createSynchronizationJobFromDiscriminatorValue } from './createSynchronizationJobFromDiscriminatorValue';
import { createSynchronizationSecretKeyStringValuePairFromDiscriminatorValue } from './createSynchronizationSecretKeyStringValuePairFromDiscriminatorValue';
import { createSynchronizationTemplateFromDiscriminatorValue } from './createSynchronizationTemplateFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeSynchronizationJob } from './serializeSynchronizationJob';
import { serializeSynchronizationSecretKeyStringValuePair } from './serializeSynchronizationSecretKeyStringValuePair';
import { serializeSynchronizationTemplate } from './serializeSynchronizationTemplate';
import { type Synchronization } from './synchronization';
import { type SynchronizationJob } from './synchronizationJob';
import { type SynchronizationSecretKeyStringValuePair } from './synchronizationSecretKeyStringValuePair';
import { type SynchronizationTemplate } from './synchronizationTemplate';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronization(synchronization: Synchronization | undefined = {} as Synchronization) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(synchronization),
        "jobs": n => { synchronization.jobs = n.getCollectionOfObjectValues<SynchronizationJob>(createSynchronizationJobFromDiscriminatorValue); },
        "secrets": n => { synchronization.secrets = n.getCollectionOfObjectValues<SynchronizationSecretKeyStringValuePair>(createSynchronizationSecretKeyStringValuePairFromDiscriminatorValue); },
        "templates": n => { synchronization.templates = n.getCollectionOfObjectValues<SynchronizationTemplate>(createSynchronizationTemplateFromDiscriminatorValue); },
    }
}
