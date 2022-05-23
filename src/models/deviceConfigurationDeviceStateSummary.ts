import {Entity} from './entity';

export interface DeviceConfigurationDeviceStateSummary extends Entity{
    /** Number of compliant devices */
    compliantDeviceCount?:number | undefined;
    /** Number of conflict devices */
    conflictDeviceCount?:number | undefined;
    /** Number of error devices */
    errorDeviceCount?:number | undefined;
    /** Number of NonCompliant devices */
    nonCompliantDeviceCount?:number | undefined;
    /** Number of not applicable devices */
    notApplicableDeviceCount?:number | undefined;
    /** Number of remediated devices */
    remediatedDeviceCount?:number | undefined;
    /** Number of unknown devices */
    unknownDeviceCount?:number | undefined;
}
