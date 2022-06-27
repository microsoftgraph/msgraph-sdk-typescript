import {DeviceInstallState} from './deviceInstallState';
import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserInstallStateSummary extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The install state of the eBook. */
    deviceStates?: DeviceInstallState[] | undefined;
    /** Failed Device Count. */
    failedDeviceCount?: number | undefined;
    /** Installed Device Count. */
    installedDeviceCount?: number | undefined;
    /** Not installed device count. */
    notInstalledDeviceCount?: number | undefined;
    /** User name. */
    userName?: string | undefined;
}
