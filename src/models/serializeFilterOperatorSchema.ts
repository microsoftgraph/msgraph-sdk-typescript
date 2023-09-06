import { AttributeType } from './attributeType';
import { type FilterOperatorSchema } from './filterOperatorSchema';
import { ScopeOperatorMultiValuedComparisonType } from './scopeOperatorMultiValuedComparisonType';
import { ScopeOperatorType } from './scopeOperatorType';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFilterOperatorSchema(writer: SerializationWriter, filterOperatorSchema: FilterOperatorSchema | undefined = {} as FilterOperatorSchema) : void {
        serializeEntity(writer, filterOperatorSchema)
        writer.writeEnumValue<ScopeOperatorType>("arity", filterOperatorSchema.arity);
        writer.writeEnumValue<ScopeOperatorMultiValuedComparisonType>("multivaluedComparisonType", filterOperatorSchema.multivaluedComparisonType);
        if(filterOperatorSchema.supportedAttributeTypes)
        writer.writeEnumValue<AttributeType>("supportedAttributeTypes", ...filterOperatorSchema.supportedAttributeTypes);
}
