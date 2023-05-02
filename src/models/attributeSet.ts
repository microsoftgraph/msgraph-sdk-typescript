import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AttributeSet extends Entity, Parsable {
    /** The description property */
    description?: string | undefined;
    /** The maxAttributesPerSet property */
    maxAttributesPerSet?: number | undefined;
}
