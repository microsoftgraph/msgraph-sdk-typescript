import {DirectoryDefinition} from './directoryDefinition';
import {serializeDirectoryDefinition} from './serializeDirectoryDefinition';
import {serializeEntity} from './serializeEntity';
import {serializeSynchronizationRule} from './serializeSynchronizationRule';
import {SynchronizationRule} from './synchronizationRule';
import {SynchronizationSchema} from './synchronizationSchema';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronizationSchema(writer: SerializationWriter, synchronizationSchema: SynchronizationSchema | undefined = {} as SynchronizationSchema) : void {
        serializeEntity(writer, synchronizationSchema)
        writer.writeCollectionOfObjectValues<DirectoryDefinition>("directories", synchronizationSchema.directories, serializeDirectoryDefinition);
        writer.writeCollectionOfObjectValues<SynchronizationRule>("synchronizationRules", synchronizationSchema.synchronizationRules, serializeSynchronizationRule);
        writer.writeStringValue("version", synchronizationSchema.version);
}
