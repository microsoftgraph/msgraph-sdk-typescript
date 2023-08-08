import {createSynchronizationMetadataEntryFromDiscriminatorValue} from './createSynchronizationMetadataEntryFromDiscriminatorValue';
import {createSynchronizationSchemaFromDiscriminatorValue} from './createSynchronizationSchemaFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeSynchronizationMetadataEntry} from './serializeSynchronizationMetadataEntry';
import {serializeSynchronizationSchema} from './serializeSynchronizationSchema';
import type {SynchronizationMetadataEntry} from './synchronizationMetadataEntry';
import type {SynchronizationSchema} from './synchronizationSchema';
import type {SynchronizationTemplate} from './synchronizationTemplate';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function deserializeIntoSynchronizationTemplate(synchronizationTemplate: SynchronizationTemplate | undefined = {} as SynchronizationTemplate) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(synchronizationTemplate),
        "applicationId": n => { synchronizationTemplate.applicationId = n.getGuidValue(); },
        "default": n => { synchronizationTemplate.defaultEscaped = n.getBooleanValue(); },
        "description": n => { synchronizationTemplate.description = n.getStringValue(); },
        "discoverable": n => { synchronizationTemplate.discoverable = n.getBooleanValue(); },
        "factoryTag": n => { synchronizationTemplate.factoryTag = n.getStringValue(); },
        "metadata": n => { synchronizationTemplate.metadata = n.getCollectionOfObjectValues<SynchronizationMetadataEntry>(createSynchronizationMetadataEntryFromDiscriminatorValue); },
        "schema": n => { synchronizationTemplate.schema = n.getObjectValue<SynchronizationSchema>(createSynchronizationSchemaFromDiscriminatorValue); },
    }
}
