import { ObjectDefinitionMetadata } from './objectDefinitionMetadata';
import { type ObjectDefinitionMetadataEntry } from './objectDefinitionMetadataEntry';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoObjectDefinitionMetadataEntry(objectDefinitionMetadataEntry: ObjectDefinitionMetadataEntry | undefined = {} as ObjectDefinitionMetadataEntry) : Record<string, (node: ParseNode) => void> {
    return {
        "key": n => { objectDefinitionMetadataEntry.key = n.getEnumValue<ObjectDefinitionMetadata>(ObjectDefinitionMetadata); },
        "@odata.type": n => { objectDefinitionMetadataEntry.odataType = n.getStringValue(); },
        "value": n => { objectDefinitionMetadataEntry.value = n.getStringValue(); },
    }
}
