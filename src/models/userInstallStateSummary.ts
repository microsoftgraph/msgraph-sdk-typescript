import {DeviceInstallState} from './deviceInstallState';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserInstallStateSummary extends Entity, Parsable {
    /**
     * The install state of the eBook.
     */
    deviceStates?: DeviceInstallState[] | undefined;
    /**
     * Failed Device Count.
     */
    failedDeviceCount?: number | undefined;
    /**
     * Installed Device Count.
     */
    installedDeviceCount?: number | undefined;
    /**
     * Not installed device count.
     */
    notInstalledDeviceCount?: number | undefined;
    /**
     * User name.
     */
    userName?: string | undefined;
}
