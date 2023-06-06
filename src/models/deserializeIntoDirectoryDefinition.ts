import {createObjectDefinitionFromDiscriminatorValue} from './createObjectDefinitionFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DirectoryDefinition} from './directoryDefinition';
import {DirectoryDefinitionDiscoverabilities} from './directoryDefinitionDiscoverabilities';
import {ObjectDefinition} from './objectDefinition';
import {serializeObjectDefinition} from './serializeObjectDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryDefinition(directoryDefinition: DirectoryDefinition | undefined = {} as DirectoryDefinition) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(directoryDefinition),
        "discoverabilities": n => { directoryDefinition.discoverabilities = n.getEnumValue<DirectoryDefinitionDiscoverabilities>(DirectoryDefinitionDiscoverabilities); },
        "discoveryDateTime": n => { directoryDefinition.discoveryDateTime = n.getDateValue(); },
        "name": n => { directoryDefinition.name = n.getStringValue(); },
        "objects": n => { directoryDefinition.objects = n.getCollectionOfObjectValues<ObjectDefinition>(createObjectDefinitionFromDiscriminatorValue); },
        "readOnly": n => { directoryDefinition.readOnly = n.getBooleanValue(); },
        "version": n => { directoryDefinition.version = n.getStringValue(); },
    }
}
