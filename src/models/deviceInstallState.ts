import {Entity} from './entity';
import {InstallState} from './installState';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceInstallState extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Device Id. */
    deviceId?: string | undefined;
    /** Device name. */
    deviceName?: string | undefined;
    /** The error code for install failures. */
    errorCode?: string | undefined;
    /** The install state of the eBook. Possible values are: notApplicable, installed, failed, notInstalled, uninstallFailed, unknown. */
    installState?: InstallState | undefined;
    /** Last sync date and time. */
    lastSyncDateTime?: Date | undefined;
    /** OS Description. */
    osDescription?: string | undefined;
    /** OS Version. */
    osVersion?: string | undefined;
    /** Device User Name. */
    userName?: string | undefined;
}
