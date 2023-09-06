import { serializeEntity } from './serializeEntity';
import { serializeSynchronizationMetadataEntry } from './serializeSynchronizationMetadataEntry';
import { serializeSynchronizationSchema } from './serializeSynchronizationSchema';
import { type SynchronizationMetadataEntry } from './synchronizationMetadataEntry';
import { type SynchronizationSchema } from './synchronizationSchema';
import { type SynchronizationTemplate } from './synchronizationTemplate';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';
import { Guid } from 'guid-typescript';

export function serializeSynchronizationTemplate(writer: SerializationWriter, synchronizationTemplate: SynchronizationTemplate | undefined = {} as SynchronizationTemplate) : void {
        serializeEntity(writer, synchronizationTemplate)
        writer.writeGuidValue("applicationId", synchronizationTemplate.applicationId);
        writer.writeBooleanValue("default", synchronizationTemplate.defaultEscaped);
        writer.writeStringValue("description", synchronizationTemplate.description);
        writer.writeBooleanValue("discoverable", synchronizationTemplate.discoverable);
        writer.writeStringValue("factoryTag", synchronizationTemplate.factoryTag);
        writer.writeCollectionOfObjectValues<SynchronizationMetadataEntry>("metadata", synchronizationTemplate.metadata, serializeSynchronizationMetadataEntry);
        writer.writeObjectValue<SynchronizationSchema>("schema", synchronizationTemplate.schema, serializeSynchronizationSchema);
}
