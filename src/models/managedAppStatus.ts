import {Entity} from './entity';

export interface ManagedAppStatus extends Entity{
    /** Friendly name of the status report. */
    displayName?:string | undefined;
    /** Version of the entity. */
    version?:string | undefined;
}
