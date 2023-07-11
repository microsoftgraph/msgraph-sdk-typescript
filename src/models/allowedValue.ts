import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AllowedValue extends Entity, Parsable {
    /**
     * Indicates whether the predefined value is active or deactivated. If set to false, this predefined value cannot be assigned to any additional supported directory objects.
     */
    isActive?: boolean | undefined;
}
