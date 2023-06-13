import {AttributeFlowBehavior} from './attributeFlowBehavior';
import {AttributeFlowType} from './attributeFlowType';
import {AttributeMapping} from './attributeMapping';
import {AttributeMappingSource} from './attributeMappingSource';
import {createAttributeMappingSourceFromDiscriminatorValue} from './createAttributeMappingSourceFromDiscriminatorValue';
import {serializeAttributeMappingSource} from './serializeAttributeMappingSource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttributeMapping(attributeMapping: AttributeMapping | undefined = {} as AttributeMapping) : Record<string, (node: ParseNode) => void> {
    return {
        "defaultValue": n => { attributeMapping.defaultValue = n.getStringValue(); },
        "exportMissingReferences": n => { attributeMapping.exportMissingReferences = n.getBooleanValue(); },
        "flowBehavior": n => { attributeMapping.flowBehavior = n.getEnumValue<AttributeFlowBehavior>(AttributeFlowBehavior); },
        "flowType": n => { attributeMapping.flowType = n.getEnumValue<AttributeFlowType>(AttributeFlowType); },
        "matchingPriority": n => { attributeMapping.matchingPriority = n.getNumberValue(); },
        "@odata.type": n => { attributeMapping.odataType = n.getStringValue(); },
        "source": n => { attributeMapping.source = n.getObjectValue<AttributeMappingSource>(createAttributeMappingSourceFromDiscriminatorValue); },
        "targetAttributeName": n => { attributeMapping.targetAttributeName = n.getStringValue(); },
    }
}
