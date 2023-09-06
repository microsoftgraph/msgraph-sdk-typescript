import { createObjectDefinitionFromDiscriminatorValue } from './createObjectDefinitionFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type DirectoryDefinition } from './directoryDefinition';
import { DirectoryDefinitionDiscoverabilities } from './directoryDefinitionDiscoverabilities';
import { type ObjectDefinition } from './objectDefinition';
import { serializeObjectDefinition } from './serializeObjectDefinition';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryDefinition(directoryDefinition: DirectoryDefinition | undefined = {} as DirectoryDefinition) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(directoryDefinition),
        "discoverabilities": n => { directoryDefinition.discoverabilities = n.getCollectionOfEnumValues<DirectoryDefinitionDiscoverabilities>(DirectoryDefinitionDiscoverabilities); },
        "discoveryDateTime": n => { directoryDefinition.discoveryDateTime = n.getDateValue(); },
        "name": n => { directoryDefinition.name = n.getStringValue(); },
        "objects": n => { directoryDefinition.objects = n.getCollectionOfObjectValues<ObjectDefinition>(createObjectDefinitionFromDiscriminatorValue); },
        "readOnly": n => { directoryDefinition.readOnly = n.getBooleanValue(); },
        "version": n => { directoryDefinition.version = n.getStringValue(); },
    }
}
