import {AttributeMappingSource} from './attributeMappingSource';
import {AttributeMappingSourceType} from './attributeMappingSourceType';
import {createStringKeyAttributeMappingSourceValuePairFromDiscriminatorValue} from './createStringKeyAttributeMappingSourceValuePairFromDiscriminatorValue';
import {serializeStringKeyAttributeMappingSourceValuePair} from './serializeStringKeyAttributeMappingSourceValuePair';
import {StringKeyAttributeMappingSourceValuePair} from './stringKeyAttributeMappingSourceValuePair';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttributeMappingSource(attributeMappingSource: AttributeMappingSource | undefined = {} as AttributeMappingSource) : Record<string, (node: ParseNode) => void> {
    return {
        "expression": n => { attributeMappingSource.expression = n.getStringValue(); },
        "name": n => { attributeMappingSource.name = n.getStringValue(); },
        "@odata.type": n => { attributeMappingSource.odataType = n.getStringValue(); },
        "parameters": n => { attributeMappingSource.parameters = n.getCollectionOfObjectValues<StringKeyAttributeMappingSourceValuePair>(createStringKeyAttributeMappingSourceValuePairFromDiscriminatorValue); },
        "type": n => { attributeMappingSource.type = n.getEnumValue<AttributeMappingSourceType>(AttributeMappingSourceType); },
    }
}
