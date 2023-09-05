import { AttributeType } from './attributeType';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type FilterOperatorSchema } from './filterOperatorSchema';
import { ScopeOperatorMultiValuedComparisonType } from './scopeOperatorMultiValuedComparisonType';
import { ScopeOperatorType } from './scopeOperatorType';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFilterOperatorSchema(filterOperatorSchema: FilterOperatorSchema | undefined = {} as FilterOperatorSchema) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(filterOperatorSchema),
        "arity": n => { filterOperatorSchema.arity = n.getEnumValue<ScopeOperatorType>(ScopeOperatorType); },
        "multivaluedComparisonType": n => { filterOperatorSchema.multivaluedComparisonType = n.getEnumValue<ScopeOperatorMultiValuedComparisonType>(ScopeOperatorMultiValuedComparisonType); },
        "supportedAttributeTypes": n => { filterOperatorSchema.supportedAttributeTypes = n.getCollectionOfEnumValues<AttributeType>(AttributeType); },
    }
}
