import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AttributeSet extends Entity, Parsable {
    /**
     * Description of the attribute set. Can be up to 128 characters long and include Unicode characters. Can be changed later.
     */
    description?: string | undefined;
    /**
     * Maximum number of custom security attributes that can be defined in this attribute set. Default value is null. If not specified, the administrator can add up to the maximum of 500 active attributes per tenant. Can be changed later.
     */
    maxAttributesPerSet?: number | undefined;
}
