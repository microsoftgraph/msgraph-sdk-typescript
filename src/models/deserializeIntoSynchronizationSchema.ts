import { createDirectoryDefinitionFromDiscriminatorValue } from './createDirectoryDefinitionFromDiscriminatorValue';
import { createSynchronizationRuleFromDiscriminatorValue } from './createSynchronizationRuleFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type DirectoryDefinition } from './directoryDefinition';
import { serializeDirectoryDefinition } from './serializeDirectoryDefinition';
import { serializeSynchronizationRule } from './serializeSynchronizationRule';
import { type SynchronizationRule } from './synchronizationRule';
import { type SynchronizationSchema } from './synchronizationSchema';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationSchema(synchronizationSchema: SynchronizationSchema | undefined = {} as SynchronizationSchema) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(synchronizationSchema),
        "directories": n => { synchronizationSchema.directories = n.getCollectionOfObjectValues<DirectoryDefinition>(createDirectoryDefinitionFromDiscriminatorValue); },
        "synchronizationRules": n => { synchronizationSchema.synchronizationRules = n.getCollectionOfObjectValues<SynchronizationRule>(createSynchronizationRuleFromDiscriminatorValue); },
        "version": n => { synchronizationSchema.version = n.getStringValue(); },
    }
}
