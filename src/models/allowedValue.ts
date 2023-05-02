import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AllowedValue extends Entity, Parsable {
    /** The isActive property */
    isActive?: boolean | undefined;
}
