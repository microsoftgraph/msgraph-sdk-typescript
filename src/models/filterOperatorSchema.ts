import {AttributeType} from './attributeType';
import {Entity} from './entity';
import {ScopeOperatorMultiValuedComparisonType} from './scopeOperatorMultiValuedComparisonType';
import {ScopeOperatorType} from './scopeOperatorType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FilterOperatorSchema extends Entity, Parsable {
    /**
     * The arity property
     */
    arity?: ScopeOperatorType | undefined;
    /**
     * The multivaluedComparisonType property
     */
    multivaluedComparisonType?: ScopeOperatorMultiValuedComparisonType | undefined;
    /**
     * Attribute types supported by the operator. Possible values are: Boolean, Binary, Reference, Integer, String.
     */
    supportedAttributeTypes?: AttributeType[] | undefined;
}
