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
     * The supportedAttributeTypes property
     */
    supportedAttributeTypes?: AttributeType[] | undefined;
}
