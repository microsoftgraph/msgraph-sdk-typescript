import {createSynchronizationJobFromDiscriminatorValue} from './createSynchronizationJobFromDiscriminatorValue';
import {createSynchronizationSecretKeyStringValuePairFromDiscriminatorValue} from './createSynchronizationSecretKeyStringValuePairFromDiscriminatorValue';
import {createSynchronizationTemplateFromDiscriminatorValue} from './createSynchronizationTemplateFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeSynchronizationJob} from './serializeSynchronizationJob';
import {serializeSynchronizationSecretKeyStringValuePair} from './serializeSynchronizationSecretKeyStringValuePair';
import {serializeSynchronizationTemplate} from './serializeSynchronizationTemplate';
import {Synchronization} from './synchronization';
import {SynchronizationJob} from './synchronizationJob';
import {SynchronizationSecretKeyStringValuePair} from './synchronizationSecretKeyStringValuePair';
import {SynchronizationTemplate} from './synchronizationTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronization(synchronization: Synchronization | undefined = {} as Synchronization) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(synchronization),
        "jobs": n => { synchronization.jobs = n.getCollectionOfObjectValues<SynchronizationJob>(createSynchronizationJobFromDiscriminatorValue); },
        "secrets": n => { synchronization.secrets = n.getCollectionOfObjectValues<SynchronizationSecretKeyStringValuePair>(createSynchronizationSecretKeyStringValuePairFromDiscriminatorValue); },
        "templates": n => { synchronization.templates = n.getCollectionOfObjectValues<SynchronizationTemplate>(createSynchronizationTemplateFromDiscriminatorValue); },
    }
}
