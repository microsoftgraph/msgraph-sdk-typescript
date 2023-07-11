import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EBookInstallSummary extends Entity, Parsable {
    /**
     * Number of Devices that have failed to install this book.
     */
    failedDeviceCount?: number | undefined;
    /**
     * Number of Users that have 1 or more device that failed to install this book.
     */
    failedUserCount?: number | undefined;
    /**
     * Number of Devices that have successfully installed this book.
     */
    installedDeviceCount?: number | undefined;
    /**
     * Number of Users whose devices have all succeeded to install this book.
     */
    installedUserCount?: number | undefined;
    /**
     * Number of Devices that does not have this book installed.
     */
    notInstalledDeviceCount?: number | undefined;
    /**
     * Number of Users that did not install this book.
     */
    notInstalledUserCount?: number | undefined;
}
