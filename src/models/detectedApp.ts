import {DetectedAppPlatformType} from './detectedAppPlatformType';
import {Entity} from './entity';
import {ManagedDevice} from './managedDevice';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DetectedApp extends Entity, Parsable {
    /**
     * The number of devices that have installed this application
     */
    deviceCount?: number | undefined;
    /**
     * Name of the discovered application. Read-only
     */
    displayName?: string | undefined;
    /**
     * The devices that have the discovered application installed
     */
    managedDevices?: ManagedDevice[] | undefined;
    /**
     * Indicates the operating system / platform of the discovered application.  Some possible values are Windows, iOS, macOS. The default value is unknown (0).
     */
    platform?: DetectedAppPlatformType | undefined;
    /**
     * Indicates the publisher of the discovered application. For example: 'Microsoft'.  The default value is an empty string.
     */
    publisher?: string | undefined;
    /**
     * Discovered application size in bytes. Read-only
     */
    sizeInByte?: number | undefined;
    /**
     * Version of the discovered application. Read-only
     */
    version?: string | undefined;
}
