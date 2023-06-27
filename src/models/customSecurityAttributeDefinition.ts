import {AllowedValue} from './allowedValue';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CustomSecurityAttributeDefinition extends Entity, Parsable {
    /**
     * Values that are predefined for this custom security attribute. This navigation property is not returned by default and must be specified in an $expand query. For example, /directory/customSecurityAttributeDefinitions?$expand=allowedValues.
     */
    allowedValues?: AllowedValue[] | undefined;
    /**
     * Name of the attribute set. Case insensitive.
     */
    attributeSet?: string | undefined;
    /**
     * Description of the custom security attribute. Can be up to 128 characters long and include Unicode characters. Can be changed later.
     */
    description?: string | undefined;
    /**
     * Indicates whether multiple values can be assigned to the custom security attribute. Cannot be changed later. If type is set to Boolean, isCollection cannot be set to true.
     */
    isCollection?: boolean | undefined;
    /**
     * Indicates whether custom security attribute values are indexed for searching on objects that are assigned attribute values. Cannot be changed later.
     */
    isSearchable?: boolean | undefined;
    /**
     * Name of the custom security attribute. Must be unique within an attribute set. Can be up to 32 characters long and include Unicode characters. Cannot contain spaces or special characters. Cannot be changed later. Case insensitive.
     */
    name?: string | undefined;
    /**
     * Specifies whether the custom security attribute is active or deactivated. Acceptable values are: Available and Deprecated. Can be changed later.
     */
    status?: string | undefined;
    /**
     * Data type for the custom security attribute values. Supported types are: Boolean, Integer, and String. Cannot be changed later.
     */
    type?: string | undefined;
    /**
     * Indicates whether only predefined values can be assigned to the custom security attribute. If set to false, free-form values are allowed. Can later be changed from true to false, but cannot be changed from false to true. If type is set to Boolean, usePreDefinedValuesOnly cannot be set to true.
     */
    usePreDefinedValuesOnly?: boolean | undefined;
}
