import {AttributeDefinition} from './attributeDefinition';
import {AttributeDefinitionMetadataEntry} from './attributeDefinitionMetadataEntry';
import {AttributeType} from './attributeType';
import {createAttributeDefinitionMetadataEntryFromDiscriminatorValue} from './createAttributeDefinitionMetadataEntryFromDiscriminatorValue';
import {createReferencedObjectFromDiscriminatorValue} from './createReferencedObjectFromDiscriminatorValue';
import {createStringKeyStringValuePairFromDiscriminatorValue} from './createStringKeyStringValuePairFromDiscriminatorValue';
import {Mutability} from './mutability';
import {ReferencedObject} from './referencedObject';
import {serializeAttributeDefinitionMetadataEntry} from './serializeAttributeDefinitionMetadataEntry';
import {serializeReferencedObject} from './serializeReferencedObject';
import {serializeStringKeyStringValuePair} from './serializeStringKeyStringValuePair';
import {StringKeyStringValuePair} from './stringKeyStringValuePair';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttributeDefinition(attributeDefinition: AttributeDefinition | undefined = {} as AttributeDefinition) : Record<string, (node: ParseNode) => void> {
    return {
        "anchor": n => { attributeDefinition.anchor = n.getBooleanValue(); },
        "apiExpressions": n => { attributeDefinition.apiExpressions = n.getCollectionOfObjectValues<StringKeyStringValuePair>(createStringKeyStringValuePairFromDiscriminatorValue); },
        "caseExact": n => { attributeDefinition.caseExact = n.getBooleanValue(); },
        "defaultValue": n => { attributeDefinition.defaultValue = n.getStringValue(); },
        "flowNullValues": n => { attributeDefinition.flowNullValues = n.getBooleanValue(); },
        "metadata": n => { attributeDefinition.metadata = n.getCollectionOfObjectValues<AttributeDefinitionMetadataEntry>(createAttributeDefinitionMetadataEntryFromDiscriminatorValue); },
        "multivalued": n => { attributeDefinition.multivalued = n.getBooleanValue(); },
        "mutability": n => { attributeDefinition.mutability = n.getEnumValue<Mutability>(Mutability); },
        "name": n => { attributeDefinition.name = n.getStringValue(); },
        "@odata.type": n => { attributeDefinition.odataType = n.getStringValue(); },
        "referencedObjects": n => { attributeDefinition.referencedObjects = n.getCollectionOfObjectValues<ReferencedObject>(createReferencedObjectFromDiscriminatorValue); },
        "required": n => { attributeDefinition.required = n.getBooleanValue(); },
        "type": n => { attributeDefinition.type = n.getEnumValue<AttributeType>(AttributeType); },
    }
}
