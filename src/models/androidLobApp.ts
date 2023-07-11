import {AndroidMinimumOperatingSystem} from './androidMinimumOperatingSystem';
import {MobileLobApp} from './mobileLobApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidLobApp extends MobileLobApp, Parsable {
    /**
     * The value for the minimum applicable operating system.
     */
    minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem | undefined;
    /**
     * The package identifier.
     */
    packageId?: string | undefined;
    /**
     * The version code of Android Line of Business (LoB) app.
     */
    versionCode?: string | undefined;
    /**
     * The version name of Android Line of Business (LoB) app.
     */
    versionName?: string | undefined;
}
