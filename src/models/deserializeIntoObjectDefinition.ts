import type {AttributeDefinition} from './attributeDefinition';
import {createAttributeDefinitionFromDiscriminatorValue} from './createAttributeDefinitionFromDiscriminatorValue';
import {createObjectDefinitionMetadataEntryFromDiscriminatorValue} from './createObjectDefinitionMetadataEntryFromDiscriminatorValue';
import type {ObjectDefinition} from './objectDefinition';
import type {ObjectDefinitionMetadataEntry} from './objectDefinitionMetadataEntry';
import {serializeAttributeDefinition} from './serializeAttributeDefinition';
import {serializeObjectDefinitionMetadataEntry} from './serializeObjectDefinitionMetadataEntry';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoObjectDefinition(objectDefinition: ObjectDefinition | undefined = {} as ObjectDefinition) : Record<string, (node: ParseNode) => void> {
    return {
        "attributes": n => { objectDefinition.attributes = n.getCollectionOfObjectValues<AttributeDefinition>(createAttributeDefinitionFromDiscriminatorValue); },
        "metadata": n => { objectDefinition.metadata = n.getCollectionOfObjectValues<ObjectDefinitionMetadataEntry>(createObjectDefinitionMetadataEntryFromDiscriminatorValue); },
        "name": n => { objectDefinition.name = n.getStringValue(); },
        "@odata.type": n => { objectDefinition.odataType = n.getStringValue(); },
        "supportedApis": n => { objectDefinition.supportedApis = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
