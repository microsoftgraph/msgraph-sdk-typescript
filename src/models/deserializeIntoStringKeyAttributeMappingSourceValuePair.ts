import { type AttributeMappingSource } from './attributeMappingSource';
import { createAttributeMappingSourceFromDiscriminatorValue } from './createAttributeMappingSourceFromDiscriminatorValue';
import { serializeAttributeMappingSource } from './serializeAttributeMappingSource';
import { type StringKeyAttributeMappingSourceValuePair } from './stringKeyAttributeMappingSourceValuePair';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoStringKeyAttributeMappingSourceValuePair(stringKeyAttributeMappingSourceValuePair: StringKeyAttributeMappingSourceValuePair | undefined = {} as StringKeyAttributeMappingSourceValuePair) : Record<string, (node: ParseNode) => void> {
    return {
        "key": n => { stringKeyAttributeMappingSourceValuePair.key = n.getStringValue(); },
        "@odata.type": n => { stringKeyAttributeMappingSourceValuePair.odataType = n.getStringValue(); },
        "value": n => { stringKeyAttributeMappingSourceValuePair.value = n.getObjectValue<AttributeMappingSource>(createAttributeMappingSourceFromDiscriminatorValue); },
    }
}
