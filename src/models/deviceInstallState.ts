import {Entity} from './entity';
import {InstallState} from './installState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceInstallState extends Entity, Parsable {
    /**
     * Device Id.
     */
    deviceId?: string | undefined;
    /**
     * Device name.
     */
    deviceName?: string | undefined;
    /**
     * The error code for install failures.
     */
    errorCode?: string | undefined;
    /**
     * Possible values for install state.
     */
    installState?: InstallState | undefined;
    /**
     * Last sync date and time.
     */
    lastSyncDateTime?: Date | undefined;
    /**
     * OS Description.
     */
    osDescription?: string | undefined;
    /**
     * OS Version.
     */
    osVersion?: string | undefined;
    /**
     * Device User Name.
     */
    userName?: string | undefined;
}
