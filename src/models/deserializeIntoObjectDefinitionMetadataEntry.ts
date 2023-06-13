import {ObjectDefinitionMetadata} from './objectDefinitionMetadata';
import {ObjectDefinitionMetadataEntry} from './objectDefinitionMetadataEntry';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoObjectDefinitionMetadataEntry(objectDefinitionMetadataEntry: ObjectDefinitionMetadataEntry | undefined = {} as ObjectDefinitionMetadataEntry) : Record<string, (node: ParseNode) => void> {
    return {
        "key": n => { objectDefinitionMetadataEntry.key = n.getEnumValue<ObjectDefinitionMetadata>(ObjectDefinitionMetadata); },
        "@odata.type": n => { objectDefinitionMetadataEntry.odataType = n.getStringValue(); },
        "value": n => { objectDefinitionMetadataEntry.value = n.getStringValue(); },
    }
}
