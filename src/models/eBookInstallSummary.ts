import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EBookInstallSummary extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Number of Devices that have failed to install this book. */
    failedDeviceCount?: number | undefined;
    /** Number of Users that have 1 or more device that failed to install this book. */
    failedUserCount?: number | undefined;
    /** Number of Devices that have successfully installed this book. */
    installedDeviceCount?: number | undefined;
    /** Number of Users whose devices have all succeeded to install this book. */
    installedUserCount?: number | undefined;
    /** Number of Devices that does not have this book installed. */
    notInstalledDeviceCount?: number | undefined;
    /** Number of Users that did not install this book. */
    notInstalledUserCount?: number | undefined;
}
