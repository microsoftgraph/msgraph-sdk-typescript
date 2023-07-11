import {ManagedAppClipboardSharingLevel} from './managedAppClipboardSharingLevel';
import {ManagedAppDataStorageLocation} from './managedAppDataStorageLocation';
import {ManagedAppDataTransferLevel} from './managedAppDataTransferLevel';
import {ManagedAppPinCharacterSet} from './managedAppPinCharacterSet';
import {ManagedAppPolicy} from './managedAppPolicy';
import {ManagedBrowserType} from './managedBrowserType';
import {Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppProtection extends ManagedAppPolicy, Parsable {
    /**
     * Data storage locations where a user may store managed data.
     */
    allowedDataStorageLocations?: ManagedAppDataStorageLocation[] | undefined;
    /**
     * Data can be transferred from/to these classes of apps
     */
    allowedInboundDataTransferSources?: ManagedAppDataTransferLevel | undefined;
    /**
     * Represents the level to which the device's clipboard may be shared between apps
     */
    allowedOutboundClipboardSharingLevel?: ManagedAppClipboardSharingLevel | undefined;
    /**
     * Data can be transferred from/to these classes of apps
     */
    allowedOutboundDataTransferDestinations?: ManagedAppDataTransferLevel | undefined;
    /**
     * Indicates whether contacts can be synced to the user's device.
     */
    contactSyncBlocked?: boolean | undefined;
    /**
     * Indicates whether the backup of a managed app's data is blocked.
     */
    dataBackupBlocked?: boolean | undefined;
    /**
     * Indicates whether device compliance is required.
     */
    deviceComplianceRequired?: boolean | undefined;
    /**
     * Indicates whether use of the app pin is required if the device pin is set.
     */
    disableAppPinIfDevicePinIsSet?: boolean | undefined;
    /**
     * Indicates whether use of the fingerprint reader is allowed in place of a pin if PinRequired is set to True.
     */
    fingerprintBlocked?: boolean | undefined;
    /**
     * Type of managed browser
     */
    managedBrowser?: ManagedBrowserType | undefined;
    /**
     * Indicates whether internet links should be opened in the managed browser app, or any custom browser specified by CustomBrowserProtocol (for iOS) or CustomBrowserPackageId/CustomBrowserDisplayName (for Android)
     */
    managedBrowserToOpenLinksRequired?: boolean | undefined;
    /**
     * Maximum number of incorrect pin retry attempts before the managed app is either blocked or wiped.
     */
    maximumPinRetries?: number | undefined;
    /**
     * Minimum pin length required for an app-level pin if PinRequired is set to True
     */
    minimumPinLength?: number | undefined;
    /**
     * Versions less than the specified version will block the managed app from accessing company data.
     */
    minimumRequiredAppVersion?: string | undefined;
    /**
     * Versions less than the specified version will block the managed app from accessing company data.
     */
    minimumRequiredOsVersion?: string | undefined;
    /**
     * Versions less than the specified version will result in warning message on the managed app.
     */
    minimumWarningAppVersion?: string | undefined;
    /**
     * Versions less than the specified version will result in warning message on the managed app from accessing company data.
     */
    minimumWarningOsVersion?: string | undefined;
    /**
     * Indicates whether organizational credentials are required for app use.
     */
    organizationalCredentialsRequired?: boolean | undefined;
    /**
     * TimePeriod before the all-level pin must be reset if PinRequired is set to True.
     */
    periodBeforePinReset?: Duration | undefined;
    /**
     * The period after which access is checked when the device is not connected to the internet.
     */
    periodOfflineBeforeAccessCheck?: Duration | undefined;
    /**
     * The amount of time an app is allowed to remain disconnected from the internet before all managed data it is wiped.
     */
    periodOfflineBeforeWipeIsEnforced?: Duration | undefined;
    /**
     * The period after which access is checked when the device is connected to the internet.
     */
    periodOnlineBeforeAccessCheck?: Duration | undefined;
    /**
     * Character set which is to be used for a user's app PIN
     */
    pinCharacterSet?: ManagedAppPinCharacterSet | undefined;
    /**
     * Indicates whether an app-level pin is required.
     */
    pinRequired?: boolean | undefined;
    /**
     * Indicates whether printing is allowed from managed apps.
     */
    printBlocked?: boolean | undefined;
    /**
     * Indicates whether users may use the 'Save As' menu item to save a copy of protected files.
     */
    saveAsBlocked?: boolean | undefined;
    /**
     * Indicates whether simplePin is blocked.
     */
    simplePinBlocked?: boolean | undefined;
}
