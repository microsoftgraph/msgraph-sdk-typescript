import {AttributeType} from './attributeType';
import {FilterOperatorSchema} from './filterOperatorSchema';
import {ScopeOperatorMultiValuedComparisonType} from './scopeOperatorMultiValuedComparisonType';
import {ScopeOperatorType} from './scopeOperatorType';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterOperatorSchema(filterOperatorSchema: FilterOperatorSchema | undefined = {} as FilterOperatorSchema, writer: SerializationWriter) : void {
        serializeEntity(writer, filterOperatorSchema)
        writer.writeEnumValue<ScopeOperatorType>("arity", filterOperatorSchema.arity);
        writer.writeEnumValue<ScopeOperatorMultiValuedComparisonType>("multivaluedComparisonType", filterOperatorSchema.multivaluedComparisonType);
        if(filterOperatorSchema.supportedAttributeTypes)
        writer.writeEnumValue<AttributeType>("supportedAttributeTypes", ...filterOperatorSchema.supportedAttributeTypes);
}
