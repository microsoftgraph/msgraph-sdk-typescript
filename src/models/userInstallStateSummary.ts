import {DeviceInstallState} from './deviceInstallState';
import {Entity} from './entity';

export interface UserInstallStateSummary extends Entity{
    /** The install state of the eBook. */
    deviceStates?:DeviceInstallState[] | undefined;
    /** Failed Device Count. */
    failedDeviceCount?:number | undefined;
    /** Installed Device Count. */
    installedDeviceCount?:number | undefined;
    /** Not installed device count. */
    notInstalledDeviceCount?:number | undefined;
    /** User name. */
    userName?:string | undefined;
}
