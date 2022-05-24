import {Entity} from './entity';
import {InstallState} from './installState';

export interface DeviceInstallState extends Entity{
    /** Device Id. */
    deviceId?:string | undefined;
    /** Device name. */
    deviceName?:string | undefined;
    /** The error code for install failures. */
    errorCode?:string | undefined;
    /** The install state of the eBook. Possible values are: notApplicable, installed, failed, notInstalled, uninstallFailed, unknown. */
    installState?:InstallState | undefined;
    /** Last sync date and time. */
    lastSyncDateTime?:Date | undefined;
    /** OS Description. */
    osDescription?:string | undefined;
    /** OS Version. */
    osVersion?:string | undefined;
    /** Device User Name. */
    userName?:string | undefined;
}
