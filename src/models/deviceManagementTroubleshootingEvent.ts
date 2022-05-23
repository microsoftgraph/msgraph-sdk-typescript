import {Entity} from './entity';

export interface DeviceManagementTroubleshootingEvent extends Entity{
    /** Id used for tracing the failure in the service. */
    correlationId?:string | undefined;
    /** Time when the event occurred . */
    eventDateTime?:Date | undefined;
}
