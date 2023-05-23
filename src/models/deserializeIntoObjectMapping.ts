import {AttributeMapping} from './attributeMapping';
import {createAttributeMappingFromDiscriminatorValue} from './createAttributeMappingFromDiscriminatorValue';
import {createFilterFromDiscriminatorValue} from './createFilterFromDiscriminatorValue';
import {createObjectMappingMetadataEntryFromDiscriminatorValue} from './createObjectMappingMetadataEntryFromDiscriminatorValue';
import {Filter} from './filter';
import {ObjectFlowTypes} from './objectFlowTypes';
import {ObjectMapping} from './objectMapping';
import {ObjectMappingMetadataEntry} from './objectMappingMetadataEntry';
import {serializeAttributeMapping} from './serializeAttributeMapping';
import {serializeFilter} from './serializeFilter';
import {serializeObjectMappingMetadataEntry} from './serializeObjectMappingMetadataEntry';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoObjectMapping(objectMapping: ObjectMapping | undefined = {} as ObjectMapping) : Record<string, (node: ParseNode) => void> {
    return {
        "attributeMappings": n => { objectMapping.attributeMappings = n.getCollectionOfObjectValues<AttributeMapping>(createAttributeMappingFromDiscriminatorValue); },
        "enabled": n => { objectMapping.enabled = n.getBooleanValue(); },
        "flowTypes": n => { objectMapping.flowTypes = n.getEnumValue<ObjectFlowTypes>(ObjectFlowTypes); },
        "metadata": n => { objectMapping.metadata = n.getCollectionOfObjectValues<ObjectMappingMetadataEntry>(createObjectMappingMetadataEntryFromDiscriminatorValue); },
        "name": n => { objectMapping.name = n.getStringValue(); },
        "@odata.type": n => { objectMapping.odataType = n.getStringValue(); },
        "scope": n => { objectMapping.scope = n.getObjectValue<Filter>(createFilterFromDiscriminatorValue); },
        "sourceObjectName": n => { objectMapping.sourceObjectName = n.getStringValue(); },
        "targetObjectName": n => { objectMapping.targetObjectName = n.getStringValue(); },
    }
}
