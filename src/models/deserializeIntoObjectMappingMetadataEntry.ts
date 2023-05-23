import {ObjectMappingMetadata} from './objectMappingMetadata';
import {ObjectMappingMetadataEntry} from './objectMappingMetadataEntry';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoObjectMappingMetadataEntry(objectMappingMetadataEntry: ObjectMappingMetadataEntry | undefined = {} as ObjectMappingMetadataEntry) : Record<string, (node: ParseNode) => void> {
    return {
        "key": n => { objectMappingMetadataEntry.key = n.getEnumValue<ObjectMappingMetadata>(ObjectMappingMetadata); },
        "@odata.type": n => { objectMappingMetadataEntry.odataType = n.getStringValue(); },
        "value": n => { objectMappingMetadataEntry.value = n.getStringValue(); },
    }
}
