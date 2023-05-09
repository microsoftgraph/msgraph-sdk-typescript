import {AllowedValue} from './allowedValue';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CustomSecurityAttributeDefinition extends Entity, Parsable {
    /** The allowedValues property */
    allowedValues?: AllowedValue[] | undefined;
    /** The attributeSet property */
    attributeSet?: string | undefined;
    /** The description property */
    description?: string | undefined;
    /** The isCollection property */
    isCollection?: boolean | undefined;
    /** The isSearchable property */
    isSearchable?: boolean | undefined;
    /** The name property */
    name?: string | undefined;
    /** The status property */
    status?: string | undefined;
    /** The type property */
    type?: string | undefined;
    /** The usePreDefinedValuesOnly property */
    usePreDefinedValuesOnly?: boolean | undefined;
}
