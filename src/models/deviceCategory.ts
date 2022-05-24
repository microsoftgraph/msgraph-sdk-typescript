import {Entity} from './entity';

export interface DeviceCategory extends Entity{
    /** Optional description for the device category. */
    description?:string | undefined;
    /** Display name for the device category. */
    displayName?:string | undefined;
}
