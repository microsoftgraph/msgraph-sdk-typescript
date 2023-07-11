import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCategory extends Entity, Parsable {
    /**
     * Optional description for the device category.
     */
    description?: string | undefined;
    /**
     * Display name for the device category.
     */
    displayName?: string | undefined;
}
